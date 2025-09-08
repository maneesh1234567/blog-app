import React, { createContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import SignUp from './components/SignUp';// Import Home component
import NavbarPost from './components/Navbarblog';
import Community from './pages/Community';
import Events from './pages/Events';
import Dashboard from './components/Dashboard'; // Import Dashboard component
import './components/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppBlog.css';
import Login from './components/Login'; // Import Routes
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

import '@fontsource/roboto/700.css';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';

import Count from './components/Count';
import Display from './components/Display';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const store = createContext();


  
  
  // const handleSubmit = async (event) => {
    //event.preventDefault(); // Prevent default form submission
    //const formData = new FormData(event.target); // Get form data
    //submit(formData, { method: 'post' }); // Submit the form data

const pageBgClass = {
  '/': 'page-home',
  '/Login': 'page-login',
  '/Signup': 'page-signup',
  '/Dashboard': 'page-dashboard',
  '/Posts': 'page-posts',
  '/Community': 'page-community',
  '/Events': 'page-events',
};

const App = () => {
  const location = useLocation();
  const [data, setData] = React.useState([
    {
      id: 1,
      title: 'Welcome to BlogApp',
      content: 'This is a platform where you can share your stories, connect with others, and discover events happening in your community.',
      link: '/Community',
      buttonText: 'Explore Community'
    },
    {
      id: 2,
      title: 'Connect with Like-minded People',
      content: 'Join discussions, share ideas, and grow your network with people who share your interests.',
      link: '/events',
      buttonText: 'Connect'
    },
  ]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Set body class for background color per page
  useEffect(() => {
    const path = location.pathname.split('/')[1] ? '/' + location.pathname.split('/')[1] : '/';
    const bgClass = pageBgClass[path] || 'page-default';
    document.body.className = bgClass;
    return () => {
      document.body.className = '';
    };
  }, [location]);

  return (
    <>
      <NavbarPost />
      <store.Provider value={[data, setData]}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Count" element={<Count />} />
        <Route path="/Display" element={<Display />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<SignUp/>}/>
        <Route path="/Posts" element={<Posts/>}/>
        <Route path="/Posts/:id" element={<PostDetail />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Events" element={<Events />} />
        </Routes>  
      </store.Provider>
      {/* Define your routes here */} 
      {/* Using Routes and Route components from react-router-dom */}
      <Footer />
    </>
  );
}

export default App;