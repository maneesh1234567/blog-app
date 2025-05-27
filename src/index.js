import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import App from './App'; // Import the main App component

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Use the App component as the root element             
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);