import React from "react";
import "../assests/css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <h2 id="logo">Logo</h2>
        <nav id="nav">
          <a href="#" className="nav-item">Home</a>
          <a href="#" className="nav-item">Others</a>
        </nav>
        <h4 id="profile">Profile</h4>
      </header>
    </>
  );
};

export default Navbar;
