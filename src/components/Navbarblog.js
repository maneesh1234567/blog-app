import React from "react";
import { Link } from "react-router-dom";
const Navbarblog = () => {
  return(
    <div>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/community"><li>Community</li></Link>
        <Link to="/Events"><li>Events</li></Link>
      </ul>
    </div>
  );
}
export default Navbarblog;