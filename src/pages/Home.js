import React from "react";
import CardContent from '../components/Card';
import '../components/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Display from "../components/Display";

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-hero">
        <h1>Welcome to BlogApp!</h1>
        <p className="home-subtitle">Your community for sharing stories, events, and ideas.</p>
        <a href="/Community" className="home-btn">Explore Community</a>
      </section>
      <section className="home-features">
        <CardContent
            imageSrc="/"
            title="My Blog Post"
            content="This is the summary of the blog post. The image above is from the public folder."
            link="/read-more"
            buttonText="Read Full Article"
            
        />
        <CardContent
          title="Share"
          content="Post your thoughts, stories, and experiences with the world."
          link="/"
          buttonText="Share"
        />
        <CardContent
          title="Discover Events"
          content="Stay updated with the latest events and happenings in your community."
          link="/Events"
          buttonText="Discover"
        />
      </section>
    </div>
  );
};

export default Home;