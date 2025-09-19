import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbarblog.css';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

import Sidebar from './Sidebar';


const Navbarblog = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="navbar-blog">
        <div className="navbar-burger" onClick={() => setSidebarOpen(true)}>
          {/* Simple burger icon */}
          <span style={{ fontSize: '2rem', cursor: 'pointer' }}>&#9776;</span>
        </div>
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
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Navbarblog;