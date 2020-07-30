import React from "react";
import ImgIcon from "../user.png";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Siderbar() {
  return (
    <div>
      <input type="checkbox" id="check" />
      <nav className="navbar">
        <label for="check">
          <FontAwesomeIcon icon="bars" id="sidebar-btn" />
        </label>
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
