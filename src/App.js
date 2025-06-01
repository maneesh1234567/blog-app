import React, { createContext } from 'react';
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

import Count from './components/Count';
import Display from './components/Display';


export const store = createContext();

const App = () =>{
  
  
  // const handleSubmit = async (event) => {
    //event.preventDefault(); // Prevent default form submission
    //const formData = new FormData(event.target); // Get form data
    //submit(formData, { method: 'post' }); // Submit the form data
 
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

  return (
    <>
      <NavbarPost />
      <store.Provider value={[data, setData]}>
        <Routes>
        <Route path="/Count" element={<Count />} />
        <Route path="/Display" element={<Display />} />
        </Routes>  
      </store.Provider>
      {/* Define your routes here */} 
      {/* Using Routes and Route components from react-router-dom */}
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