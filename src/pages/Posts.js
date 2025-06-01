import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DynamicForm from '../components/DynamicForm';

const POSTS_PER_PAGE = 5;
const Posts = () => {
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [localPosts, setLocalPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('https://fakestoreapi.in/api/products?limit=50')
      .then((res) => res.json())
      .then((data) => setFetchedPosts(data ? data?.products : []));
  }, []);

  const handleCreatePost = (formData) => {
    const newPost = {
      id: Date.now(),
      title: formData.name,
      description: formData.comments,
      price: formData.age, // Example: using age as price for demo
      email: formData.email,
      isLocal: true
    };
    setLocalPosts(prev => {
      const updated = [newPost, ...prev];
      localStorage.setItem('localPosts', JSON.stringify(updated));
      return updated;
    });
  };

  const allPosts = [...localPosts, ...fetchedPosts];
  const start = (page - 1) * POSTS_PER_PAGE;
  const paginatedPosts = allPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <div>
      <h2>Blog Posts</h2>
      {/* Post Creation Form */}
      <div style={{ maxWidth: 500, margin: '0 auto', marginBottom: 32 }}>
        <DynamicForm onSubmit={handleCreatePost} />
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {paginatedPosts.map((post) => (
          <li key={post.id} style={{ marginBottom: '2rem' }}>
            <Card
              className="blog-feature-card"
              style={{ maxWidth: 500, margin: '0 auto' }}
            >
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <div style={{ color: '#555', fontSize: '1.1rem', marginBottom: 16 }}>{post.description}</div>
                {post.price && (
                  <div style={{ fontWeight: 600, fontSize: '1.2rem', color: '#1976d2' }}>Price: ${post.price}</div>
                )}
                <Button variant="primary" as={Link} to={`/posts/${post.id}${post.isLocal ? '?local=1' : ''}`}>
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1rem' }}>
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <span>{page}</span>
        <button
          disabled={start + POSTS_PER_PAGE >= allPosts.length}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Posts;