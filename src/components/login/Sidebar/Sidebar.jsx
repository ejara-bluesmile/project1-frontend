import React from "react";
import ImgIcon from "../user.png";
import "./Sidebar.css";

function Siderbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="left-area">
          <h3>Bluesmile</h3>
        </div>
        <div className="right-area">
          <a href="#" className="logout-btn">
            Logout
          </a>
        </div>
      </nav>
      <div className="sidebar">
        <center>
          <div>
            <img src={ImgIcon} className="profile_image" alt="user" />
          </div>
          <h4>Name</h4>
          <h4>Email</h4>
        </center>
        <div className="sidebar-nav">
          <a href="">
            <i className="fas fa-desktop"></i>
            <span>Edit User</span>
          </a>
          <a href="">
            <i className="fas fa-desktop"></i>
            <span>User Actions</span>
          </a>
          <a href="">
            <i className="fas fa-desktop"></i>
            <span>Issues Actions </span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Siderbar;
