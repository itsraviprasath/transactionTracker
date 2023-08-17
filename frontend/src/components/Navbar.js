import React from "react";
import "../assests/css/Navbar.css";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdNotificationsNone } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <header>
        <Link className="logo" to="/dashboard">
          <h1>Logo</h1>
        </Link>
        <nav id="nav">
          <Link to="/dashboard" className="nav-item">
            Dashboard
          </Link>
          <Link to="#" className="nav-item">
            Transactions
          </Link>
          <Link to="#" className="nav-item">
            Loans
          </Link>
          <Link to="#" className="nav-item">
            Others
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
