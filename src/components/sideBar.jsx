import React from "react";
import { Link } from "react-router-dom";
import "./common/common.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgIcon from "../resource/user.png";

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
            <Link to="/editusers">Edit User</Link>

            <Link to="/useractions">
              <span>User Actions</span>
            </Link>

            <Link to="/issuesactions">
              <span>Issues Actions </span>
            </Link>
          </div>
        </label>
      </div>
    </div>
  );
}
export default Sidebar;
