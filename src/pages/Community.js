import React from "react";
import './Community.css';

const communitySections = [
  {
    id: 1,
    title: "Our Mission",
    image: "https://imgs.search.brave.com/GjJg3XGuMOMPBnSLg0YtIcRo-x9HfMmWNAjNNcHilh4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE1L2Nl/LzM5LzE1Y2UzOTBl/Mjk2MmZmNWIxZGU2/N2E0NjQzNTU5ODJl/LmpwZw",
    description: "We aim to connect bloggers and readers, fostering a vibrant community for sharing stories and ideas."
  },
  {
    id: 2,
    title: "Featured Members",
    image: "https://imgs.search.brave.com/wzCp2SYyAgjmNInnf4yq0LBl36A_HQ90r_F6Ftrc2ac/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tbGYu/b3JnL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzEwL3ZvbHVu/dGVlci1jbGVhbnVw/LWNvbW11bml0eS1m/aXJzdC12aWxsYWdl/LW1vYmlsZS1sb2F2/ZXMtZmlzaGVzLTIw/MjMud2VicA",
    description: "Meet some of our most active and inspiring community members who make a difference every day."
  },
  {
    id: 3,
    title: "Community Events",
    image: "https://imgs.search.brave.com/GjJg3XGuMOMPBnSLg0YtIcRo-x9HfMmWNAjNNcHilh4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE1L2Nl/LzM5LzE1Y2UzOTBl/Mjk2MmZmNWIxZGU2/N2E0NjQzNTU5ODJl/LmpwZw",
    description: "Join our regular events, workshops, and meetups to learn, share, and grow together."
  },
  {
    id: 4,
    title: "Get Involved",
    image:"Images/Banner-1.jpg",
    description: "Contribute your stories, participate in discussions, and help shape the future of our community."
  },
  {
    id: 5,
    title: "Monthly Book Club",
    image: "https://imgs.search.brave.com/ySn5wMBVc9ViyyDPPnsORysLb7WIKbK-dsl8D8-zg_0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODE4MjUw/NTQ4MDctMmU3YmI2/MTBhNmU3P2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE9Y/eDhZMjl0YlhWdWFY/UjVKVEl3YzJWeWRt/bGpaWHhsYm53d2ZI/d3dmSHg4TUE9PQ",
    description: "Join our monthly book club to discuss the latest reads and connect with fellow book lovers."
  },
  {
    id: 6,
    title: "Tech Talks",
    image: "https://imgs.search.brave.com/hvHtYA62OxupH2IRJ1c046O44acTLMTe71riXLUikBA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/NjczNjc5NS9waG90/by9tZW50YWwtaGVh/bHRoLWNvbW11bml0/eS1ncm91cC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9TDBh/R0QycXpQbmlZV3lz/YmpQVW9JWHhwZktz/QTJhQm1laVM1ZXow/VUNmOD0",
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