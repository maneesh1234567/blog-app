import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const isLocal = location.search.includes('local=1');
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (isLocal) {
      const localPosts = JSON.parse(localStorage.getItem('localPosts') || '[]');
      const found = localPosts.find(p => String(p.id) === String(id));
      setPost(found || null);
    } else {
      fetch(`https://fakestoreapi.in/api/products/${id}`)
        .then(res => {
          if (!res.ok) throw new Error('Network response was not ok');
          return res.json();
        })
        .then(data => setPost(data))
        .catch(() => setPost(null)); // Set post to null on error
    }
  }, [id, isLocal]);

  if (!post) return <div className="post-detail-error">Post not found or loading...</div>;

  return (
    <div className="post-detail-container">
      <Card className="blog-feature-card">
        <Card.Body>
          <Card.Title className="post-detail-title">{post.title}</Card.Title>
          <div className="post-detail-description">{post.description}</div>
          <div className="post-detail-row">
            <span className="post-detail-label">Price:</span>
            <span className="post-detail-value">${post.price}</span>
          </div>
          <div className="post-detail-row">
            <span className="post-detail-label">By:</span>
            <span className="post-detail-value">{post.email}</span>
          </div>
          <div className="post-detail-row">
            <span className="post-detail-label">Brand:</span>
            <span className="post-detail-value">{post.brand}</span>
          </div>
          <div className="post-detail-row">
            <span className="post-detail-label">Model:</span>
            <span className="post-detail-value">{post.model}</span>
          </div>
          <div className="post-detail-row">
            <span className="post-detail-label">Color:</span>
            <span className="post-detail-value">{post.color}</span>
          </div>
          <div className="post-detail-row">
            <span className="post-detail-label">Category:</span>
            <span className="post-detail-value">{post.category}</span>
          </div>
          <div className="post-detail-row">
            <span className="post-detail-label">Discount:</span>
            <span className="post-detail-value">{post.discount}%</span>
          </div>
        </Card.Body>
        <div className="post-detail-btn-row">
          <Button variant="primary" onClick={() => navigate(-1)}>Go Back</Button>
        </div>
        {/* Comments Section */}
        {/* <div style={{ marginTop: 32 }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>Comments</h3>
          {comments.length === 0 && <div style={{ color: '#888' }}>No comments yet.</div>}
          {comments.map((c, i) => (
            <div key={i} style={{ background: '#f5f5f5', borderRadius: 6, padding: 8, marginBottom: 8 }}>
              <div><strong>{c.name}</strong> ({c.email})</div>
              <div>Age: {c.age}</div>
              <div style={{ marginTop: 4 }}>{c.comments}</div>
            </div>
          ))}
        </div> */}
      </Card>
    </div>
  );
};

export default PostDetail;