import React from 'react';
import Card from './components/Card'; // Import the Card component
import './components/Card.css';
 // Import the CSS file for styling

function App() {
  return (
    <div className="App" style={{ padding: '20px', background:'red',height:'100vh'}} >
      <h1>My Blog</h1>
      <Card className='card' title="First Post" content="This is the content of the first blog post." />
      <Card title="Second Post" content="This is the content of the second blog post." />
    </div>
  );
}

export default App;