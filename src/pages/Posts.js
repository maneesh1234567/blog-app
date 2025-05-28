import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const POSTS_PER_PAGE = 5;
const Posts = () => {
  const [Posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('https://fakestoreapi.in/api/products?limit=50')
      .then((res) => res.json())
      .then((data) => setPosts(data ? data?.products : []));
  }, []);
  const start = (page - 1) * POSTS_PER_PAGE;
  const paginatedPosts =
    Posts && Posts.filter((e, i) => start <= i && i < start + POSTS_PER_PAGE);

  return (
    <div>
      <h2>Blog Posts</h2>
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
                    <Button variant="primary" as={Link} to={`/posts/${post.id}`}>
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
          disabled={start + POSTS_PER_PAGE >= Posts.length}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Posts;