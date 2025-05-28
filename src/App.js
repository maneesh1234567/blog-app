import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import SignUp from './components/SignUp';// Import Home component
import NavbarPost from './components/Navbarblog';
import Community from './pages/Community';
import Events from './pages/Events';
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

const App = () =>{
  
  
  // const handleSubmit = async (event) => {
    //event.preventDefault(); // Prevent default form submission
    //const formData = new FormData(event.target); // Get form data
    //submit(formData, { method: 'post' }); // Submit the form data
 
  

  return (
    <>
      <NavbarPost />
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<SignUp/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/Posts" element={<Posts/>}/>
        <Route path="/Posts/:id" element={<PostDetail />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;