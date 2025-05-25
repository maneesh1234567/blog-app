import React from 'react';
import CardContent from './components/Card';
import NavbarPost from './components/Navbarblog';
import './components/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import './AppBlog.css';
import Section1 from './components/Section1';
import Footer from './components/Footer';

function App() {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first blog post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second blog post.' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third blog post.' },
    {id:4, title:'Fourth Post', content:'Fourth post'}
  ];



  return (
    <>
     <Container>
    <Row>
      <Col xs={12} md={12} lg={12}>
          < NavbarPost/>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={12} lg={12}>
          < Section1/>
      </Col>
      </Row>
      </Container>
  <Container className='blog-container'>
      <Row>
        {posts.map((post) => (
          <Col xs={12} md={6}> {/* Adjust column size as needed */}
            <CardContent key={post.id} title={post.title} content={post.content} />
          </Col>
        ))}
      </Row>
  </Container>
  <Container className='footer-container'>
    <Row>
      <Col xs={12} md={12} lg={12}>
        <Footer/>
        </Col>
      </Row>
      </Container>   
    </>
      
    
      

    
    
    
    

  );
}

export default App;

// filepath: src/components/Navbarblog.js
