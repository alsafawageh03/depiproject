import React from "react";
import "./Navbar.css";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="search-box">
        <input type="text" placeholder="Search Anything" />
        <FaSearch className="search-icon" />
      </div>
      <div className="icons">
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </div>
  );
}
        