import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.in/api/products/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <div className="blog-feature-card" style={{ maxWidth: 400, width: '100%', padding: 24 }}>
        <div><strong>ID:</strong> {post.id}</div>
        <h2 style={{ color: '#1976d2', marginBottom: '1rem' }}>{post.title}</h2>
        <div style={{ color: '#555', fontSize: '1.1rem', marginBottom: 16 }}>{post.description}</div>
        {post.price && (
            <div style={{ fontWeight: 600, fontSize: '1.2rem', color: '#1976d2' }}>Price: ${post.price}</div>
        )}
        </div>
  </div>
  );
};

export default PostDetail;