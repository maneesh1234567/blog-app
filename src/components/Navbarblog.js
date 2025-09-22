import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbarblog.css';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

import Sidebar from './Sidebar';


const Navbarblog = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <nav className="navbar-blog">
        <div className="navbar-burger">
          <button
            type="button"
            aria-label="Open sidebar menu"
            onClick={() => setSidebarOpen(true)}
            style={{ background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', padding: '0.2rem 0.6rem', borderRadius: '6px' }}
          >
            &#9776;
          </button>
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
    </div>
  );
};

export default Navbarblog;