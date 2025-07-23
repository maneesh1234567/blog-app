// filepath: src/components/Card/Card.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Card.css';


const CardContent = ({ imageSrc, title, content, link, buttonText }) => {
  return (
    <Card className="blog-feature-card">
      <Card.Body>
        <Card.Img src={imageSrc} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        {link && (
          <Button variant="primary" href={link}>
            {buttonText || 'Learn More'}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default CardContent;

