import React, { useState } from 'react';
import './Login.css';
import { Input } from '@mui/material';

const Login = () => {
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <form  onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Username"
        /><br />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        /><br />
        <Input type="submit" value="Login" />
        <Input type="reset" value="Reset" onClick={() => setData({ username: '', password: '' })} />
      </form>
    </div>
  );
};

export default Login;