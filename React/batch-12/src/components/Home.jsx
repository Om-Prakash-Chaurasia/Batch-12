// import React from "react";
// import { Routes, Route } from "react-router-dom";

// function Home() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<h2>I am Home Page</h2>} />
//         <Route path="/about" element={<div>I am About Page</div>} />
//         <Route path="/contact" element={<div>I am Contact Page</div>} />
//       </Routes>
//     </div>
//   );
// }

// export default Home;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import About from "./About";
// import Contact from "./Contact";

// function Home() {
//   return (
//     <div>
//       <h1>I am home page.</h1>
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/about">About Page</Link>
      <br />
      <Link to="/contact">Contact Page</Link>
    </div>
  );
}

export default Home;
