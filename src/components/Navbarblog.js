import React from "react";
import { Link } from "react-router-dom";
import './Navbarblog.css';

const Navbarblog = () => {
  return (
    <nav className="navbar-blog">
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/community" className="nav-link">Community</Link>
        <Link to="/Events" className="nav-link">Events</Link>
      </div>
      <div className="navbar-actions">
        <Link to="/Login" className="nav-btn login-btn">Login</Link>
        <Link to="/SignUp" className="nav-btn signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbarblog;