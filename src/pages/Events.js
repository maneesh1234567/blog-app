import React from "react";
import './Events.css';

const eventsData = [
  {
    id: 1,
    title: "React Community Meetup",
    date: "2025-08-10",
    location: "Online",
    description: "Join us for a virtual meetup to discuss the latest in React and frontend development."
  },
  {
    id: 2,
    title: "Blogging Best Practices",
    date: "2025-08-15",
    location: "Community Center",
    description: "A workshop on how to write engaging blog posts and grow your audience."
  },
  {
    id: 3,
    title: "Open Mic Night",
    date: "2025-08-20",
    location: "Main Hall",
    description: "Share your stories, poems, or articles with the community in a fun open mic format."
  },
  {
    id: 4,
    title: "Monthly Book Club",
    date: "2025-08-25",
    location: "Library Room 2",
    description: "Join our monthly book club to discuss the latest reads and connect with fellow book lovers."
  },
  {
    id: 5,
    title: "Tech Talks",
    date: "2025-08-28",
    location: "Auditorium",
    description: "Attend tech talks hosted by experts in blogging, web development, and digital marketing."
  },
  {
    id: 6,
    title: "Community Picnic",
    date: "2025-09-05",
    location: "Central Park",
    description: "Bring your family and friends for a fun-filled day with games, food, and community bonding."
  }
];

const Events = () => {
  return (
    <div className="events-container">
      <h2 className="events-title">Upcoming Events</h2>
      <div className="events-table-wrapper">
        <table className="events-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Location</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {eventsData.map(event => (
              <tr key={event.id}>
                <td>{event.title}</td>
                <td>{new Date(event.date).toLocaleDateString()}</td>
                <td>{event.location}</td>
                <td>{event.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;