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
        <Link to="/community" className="nav-link nav-icon">Features</Link>
        <Link to="/Events" className="nav-link nav-icon">Testimonals</Link>
        <Link to ="/" className="nav-link nav-icon">Highlights</Link>
        <Link className="nav-link nav-icon">Pricing</Link>
        <Link className="nav-link nav-icon">FAQ</Link>
        <Link className="nav-link nav-icon">Blog</Link>
      </div>
      <div className="navbar-actions">
        <Link to="/Login" className="nav-btn login-btn">Login</Link>
        <Link to="/SignUp" className="nav-btn signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbarblog;