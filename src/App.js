import React from 'react';
import CardContent from './components/Card';
import './components/Card.css';
import './App.css'; // Import your CSS file for global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

function App() {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first blog post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second blog post.' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third blog post.' },
  ];



  return (
  <Container>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} xs={12} md={4}> {/* Adjust column size as needed */}
            <CardContent title={post.title} content={post.content} />
          </Col>
        ))}
      </Row>
    </Container>    
    
      

    
    
    
    

  );
}

export default App;