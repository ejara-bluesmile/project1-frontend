import React from "react";
import "./common/common.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgIcon from "../resource/user.png";
import { Link } from "react-router-dom";
import Lagout from "./logout";

function Sidebar() {
  return (
    <div className="wrapper">
      <input type="checkbox" id="check" />
      <div className="sidebar">
        <h3>BLUESMILE</h3>
        <label for="check">
          <FontAwesomeIcon icon="bars" id="sidebar-btn" />
        </label>
        <center>
          <div>
            <img src={ImgIcon} className="profile_image" alt="user" />
          </div>
          <h4>Name</h4>
          <h4>Email</h4>
        </center>
        <div className="sidebar-nav">
          <Link to="/editusers">
            <span>Edit User</span>
          </Link>

          <Link to="/users">
            <span>User Actions</span>
          </Link>
          <Link to="/issues">
            <span>Issues Actions </span>
          </Link>
        </div>
        <div className="lagout btn btn-outline-info">
          Lagout{/* <Lagout /> */}
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
