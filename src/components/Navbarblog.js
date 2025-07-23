import React from "react";
import { Link } from "react-router-dom";
import './Navbarblog.css';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

const Navbarblog = () => {


  return (
    <nav className="navbar-blog">
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          <HomeSharpIcon className="nav-icon" />
          <span color="secondary">Home</span>
        </Link>
          
      </div>
      <div className="navbar-actions">
        <Link to="/community" className="nav-link nav-icon">Community</Link>
          <Link to="/Events" className="nav-link nav-icon">Events</Link>
        <Link to="/Posts" className="nav-link nav-icon">Posts</Link>
        <Link to="/Login" className="nav-btn login-btn">Login</Link>
        <Link to="/SignUp" className="nav-btn signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbarblog;