import React from "react";
import "../assests/css/Navbar.css";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdNotificationsNone } from "react-icons/md";

const Navbar = () => {
  // document.getElementsByClassName("nav-item")[0].classList.add("active");

  return (
    <>
      <header>
        <Link className="logo" to="#">
          <h1>TranX</h1>
        </Link>
        <nav id="nav">
          <Link to="/dashboard" className="nav-item">
            Dashboard
          </Link>
          <Link to="#" className="nav-item">
            Transactions
          </Link>
          <Link to="/all-loans" className="nav-item">
            All Loans
          </Link>
          <Link to="/your-loans" className="nav-item">
            Your Loans
          </Link>
        </nav>
        <div className="nav-icon">
          <Link to="#">
            <MdNotificationsNone className="notification-icon" />
          </Link>
          <Link to="/profile">
            <CgProfile className="profile-icon" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
