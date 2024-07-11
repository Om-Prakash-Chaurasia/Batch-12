import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About Page</Link>
    </div>
  );
}

export default Contact;
