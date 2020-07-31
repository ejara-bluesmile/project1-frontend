import React from "react";
import "./common.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgIcon from "../login/user.png";

function Sidebar() {
  return (
    <div className="wrapper">
      <input type="checkbox" id="check" />
      <div className="sidebar">
        <label for="check">
          <FontAwesomeIcon icon="bars" id="sidebar-btn" />
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
        </label>
      </div>
    </div>
  );
}
export default Sidebar;
