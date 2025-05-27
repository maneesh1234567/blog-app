import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import Home component
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

const App = () =>{
  
  
  // const handleSubmit = async (event) => {
    //event.preventDefault(); // Prevent default form submission
    //const formData = new FormData(event.target); // Get form data
    //submit(formData, { method: 'post' }); // Submit the form data
 
  

  return (
    <>
      <BrowserRouter>
        <NavbarPost />
        <Routes> {/* Use Routes */}
          <Route path="/Login" element={<Login/>}/> {/* Use element prop */}
          <Route path="/" element={<Home />} /> {/* Use element prop */}
          <Route path="/Community" element={<Community />} /> {/* Use element prop */}
          <Route path="/Events" element={<Events />} /> {/* Use element prop */}
        </Routes>

       
      </BrowserRouter>
    </>
  );
}

export default App;