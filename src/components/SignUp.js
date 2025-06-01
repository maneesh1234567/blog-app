import React, { Component } from 'react';
import './Login.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      message: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', this.state);
    // Simulate form validation and submission
    const { username, email, password, confirmPassword } = this.state;
    if (!username || !email || !password || !confirmPassword) {
      this.setState({ message: 'Please fill in all fields.' });
    } else if (password !== confirmPassword) {
      this.setState({ message: 'Passwords do not match.' });
    } 
  };

  handleReset = () => {
    this.setState({ username: '', email: '', password: '', confirmPassword: '', message: '' });
  };

  render() {
    const { username, email, password, confirmPassword, message } = this.state;
    return (
      <div className="login-container">
        {message && <div className="login-message">{message}</div>}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            placeholder="Username"
            className="login-input"
          /><br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
            className="login-input"
          /><br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
            className="login-input"
          /><br />
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            placeholder="Confirm Password"
            className="login-input"
          /><br />
          <input type="submit" value="Sign Up" className="login-btn" />
          <input type="button" value="Reset" className="login-btn" onClick={this.handleReset} />
        </form>
      </div>
    );
  }
}

export default SignUp;
