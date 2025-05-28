import React, { useState } from 'react';
import './Login.css';
import { Input } from '@mui/material';

const SignUp = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');

  const { username, email, password, confirmPassword } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!username || !email || !password || !confirmPassword) {
      setMessage('Please fill in all fields.');
    } else if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
    } else {
      setMessage(`Account created for ${username}! (Simulated signup)`);
    }
  };

  return (
    <div className="login-container">
      {message && <div className="login-message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Username"
        /><br />
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        /><br />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        /><br />
        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        /><br />
        <Input type="submit" value="Sign Up" />
        <Input type="reset" value="Reset" onClick={() => setData({ username: '', email: '', password: '', confirmPassword: '' })} />
      </form>
    </div>
  );
};

export default SignUp;
