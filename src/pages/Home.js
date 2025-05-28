import React from "react";
import CardContent from '../components/Card';
import '../components/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

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
          title="Connect"
          content="Meet like-minded people, join discussions, and grow your network."
          link="/Community"
          buttonText="Connect"
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