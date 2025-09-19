import React, { useState } from 'react';
import './Login.css';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const inputStyle = { marginBottom: '12px', height: '40px' };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = form;
    if (!username || !email || !password || !confirmPassword) {
      setMessage('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
    } else {
      setForm({ username: '', email: '', password: '', confirmPassword: '' });
      setMessage('Sign up successful!');
      setTimeout(() => setMessage(''), 2000);
    }
  };

  const handleReset = () => {
    setForm({ username: '', email: '', password: '', confirmPassword: '' });
    setMessage('');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          className="login-input"
          autoComplete="username"
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="login-input"
          autoComplete="email"
          style={inputStyle}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="login-input"
          autoComplete="new-password"
          style={inputStyle}
        />
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="login-input"
          autoComplete="new-password"
          style={inputStyle}
        />
        {message && <div className="login-message" style={{ marginBottom: '8px' }}>{message}</div>}
        <input type="submit" value="Sign Up" className="login-btn" style={{ marginTop: '8px' }} />
      </form>
    </div>
  );
};

export default SignUp;
