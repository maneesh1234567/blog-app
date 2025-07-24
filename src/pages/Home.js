import React from "react";
import CardContent from '../components/Card';
import '../components/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Display from "../components/Display";

import AOS from 'aos';


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
            imageSrc="/images/Banner-1.jpg"
            title="My Blog Post"
            content="This is the summary of the blog post. The image above is from the public folder."
            link="/SignUp"
            buttonText="Sign Up"
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
        <CardContent
          imageSrc="/images/Banner-img.jpeg"
          title="Inspiring Story"
          content="Read how our community members are making a difference every day."
          link="/read-story"
          buttonText="Get Inspired"
        />
      </section>

      {/* Featured Stories Section */}
      <section className="home-featured-stories">
        <h2>Featured Stories</h2>
        <div className="featured-stories-list">
          <div className="featured-story"  data-aos="fade-right">
            <img src="/images/Banner-1.jpg" alt="Featured Story 1" className="featured-story-img" />
            <h3>Journey of a Blogger</h3>
            <p>Discover the inspiring journey of one of our top bloggers and how they built their audience.</p>
          </div>
          <div className="featured-story" data-aos="fade-left">
            <img src="/images/Banner-1.jpg" alt="Featured Story 2" className="featured-story-img" />
            <h3>Community Impact</h3>
            <p>See how our platform is helping people connect and create positive change in their communities.</p>
          </div>
        </div>
      </section>
      <section className="home-contact">
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? Email us at <a href="mailto:support@blogapp.com">support@blogapp.com</a>
        </p>
      </section>

    </div>
  );
};

export default Home;