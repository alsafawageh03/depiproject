import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <Link to="/logo" className="logo">Logo</Link>
      </div>
      <ul>
        <li><Link to="/all">All</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/add-new">Add New Asset</Link></li> {/* إضافة الرابط */}
        {/* <li><Link to="./Addnew.js">Add New</Link></li> */}
        <li><Link to="/manage">Manage</Link></li>
        <li><Link to="/future">Future</Link></li>
      </ul>
      <div className="setting-box">
        <Link to="/setting">Setting</Link>
      </div>
    </div>
  );
}
