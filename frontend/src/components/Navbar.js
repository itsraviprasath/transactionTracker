import React, { useState } from "react";
import "../assests/css/Navbar.scss";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdNotificationsNone } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  // document.getElementsByClassName("nav-item")[0].classList.add("active");

  return (
    <>
      <header>
        <Link className="logo" to="#">
          <h1>TranX</h1>
        </Link>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <HiMenu />
        </div>
        <nav id="nav">
          <div className={`nav-elements  ${showNavbar && "active"}`}>
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
          </div>
        </nav>
        <div className="nav-icon">
          {/* <Link to="#">
            <MdNotificationsNone className="notification-icon" />
          </Link> */}
          <Link to="/profile">
            <CgProfile className="profile-icon" />
          </Link>
          <Link onClick={handleLogout}>
            <IoMdLogOut className="logout-icon" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
