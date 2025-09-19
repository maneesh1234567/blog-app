import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Posts', path: '/Posts' },
  { name: 'Community', path: '/Community' },
  { name: 'Events', path: '/Events' },
  { name: 'Dashboard', path: '/Dashboard' },
  { name: 'Login', path: '/Login' },
  { name: 'Sign Up', path: '/Signup' },
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar${isOpen ? ' open' : ''}`}> 
      <div className="sidebar-header">
        <button className="close-btn" onClick={onClose}>&times;</button>
      </div>
      <ul className="sidebar-menu">
        {menuItems.map(item => (
          <li key={item.name}>
            <Link to={item.path} onClick={onClose}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
