import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const location = useLocation();
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
        .then(res => res.json())
        .then(data => setPost(data));
    }
  }, [id, isLocal]);

  if (!post) return <div>Post not found.</div>;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div className="blog-feature-card" style={{ maxWidth: 400, width: '100%', padding: 24 }}>
        <div><strong>ID:</strong> {post.id}</div>
        <h2 style={{ color: '#1976d2', marginBottom: '1rem' }}>Name:{post.title}</h2>
        <div style={{ color: '#555', fontSize: '1.1rem', marginBottom: 16 }}>Comments:{post.description}</div>
        {post.price && (
          <div style={{ fontWeight: 600, fontSize: '1.2rem', color: '#1976d2' }}>Price: ${post.price}</div>
        )}
        {post.email && (
          <div style={{ color: '#888', fontSize: '0.95rem', marginBottom: 8 }}>By: {post.email}</div>
        )}
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
      </div>
    </div>
  );
};

export default PostDetail;