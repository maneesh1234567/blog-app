import React from "react";
import './Community.css';

const communitySections = [
  {
    id: 1,
    title: "Our Mission",
    image: "/images/Banner-1.jpg",
    description: "We aim to connect bloggers and readers, fostering a vibrant community for sharing stories and ideas."
  },
  {
    id: 2,
    title: "Featured Members",
    image: "/images/Banner-img.jpeg",
    description: "Meet some of our most active and inspiring community members who make a difference every day."
  },
  {
    id: 3,
    title: "Community Events",
    image: "/images/Banner-1.jpg",
    description: "Join our regular events, workshops, and meetups to learn, share, and grow together."
  },
  {
    id: 4,
    title: "Get Involved",
    image: "/images/Banner-img.jpeg",
    description: "Contribute your stories, participate in discussions, and help shape the future of our community."
  },
  {
    id: 5,
    title: "Monthly Book Club",
    image: "/images/Banner-1.jpg",
    description: "Join our monthly book club to discuss the latest reads and connect with fellow book lovers."
  },
  {
    id: 6,
    title: "Tech Talks",
    image: "/images/Banner-img.jpeg",
    description: "Attend tech talks hosted by experts in blogging, web development, and digital marketing."
  }
];

const Community = () => {
  return (
    <div className="community-container">
      <h2 className="community-title">Welcome to Our Community</h2>
      <div className="community-sections">
        {communitySections.map(section => (
          <div className="community-section" key={section.id}>
            <img src={section.image} alt={section.title} className="community-section-img" />
            <div className="community-section-content">
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;