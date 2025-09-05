import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DynamicForm from '../components/DynamicForm';
import './Posts.css'; // <-- Import the CSS file

const POSTS_PER_PAGE = 5;
const Posts = () => {
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [localPosts, setLocalPosts] = useState([]);
  const [page, setPage] = useState(1);

  // Load local posts from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('localPosts');
    if (stored) {
      setLocalPosts(JSON.parse(stored));
    }
  }, []);

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
      price: formData.price,
      email: formData.email,
      brand: formData.brand,
      model: formData.model,
      color: formData.color,
      category: formData.category,
      discount: formData.discount,
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
      <h2 className="posts-title">Blog Posts</h2>
      {/* Post Creation Form */}
      <div className="posts-form-container">
        <DynamicForm onSubmit={handleCreatePost} />
      </div>
      {paginatedPosts.length === 0 ? (
        <div className="posts-empty">No posts to display.</div>
      ) : (
        <ul className="posts-list">
          {paginatedPosts.map((post) => (
            <li key={post.id} className="posts-list-item">
              <Card className="blog-feature-card">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <div className="post-description">{post.description}</div>
                  {post.price && (
                    <div className="post-price">Price: ${post.price}</div>
                  )}
                  {post.brand && <div>Brand: {post.brand}</div>}
                  <Button variant="primary" as={Link} to={`/posts/${post.id}${post.isLocal ? '?local=1' : ''}`}>
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      )}
      <div className="pagination">
        <button
          className="pagination-btn"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <span className="pagination-page">{page}</span>
        <button
          className="pagination-btn"
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