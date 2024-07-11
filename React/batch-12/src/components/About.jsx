import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>About Us</h2>
      <Link to="/">Home</Link>
      <br />
      <Link to="/contact">Contact Page</Link>
    </div>
  );
}

export default About;
