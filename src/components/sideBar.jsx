import React from "react";
import "./common/common.css";
import ImgIcon from "../resource/user.png";
import { Link } from "react-router-dom";
import Logout from "./logout";
import iconCompany from "../resource/bluesmile.png";

function Sidebar() {
  return (
    <div className="wraper">
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i class="fa fa-bars" id="btn" />
        <i class="fa fa-times" id="cancel" />
      </label>
      <div className="sidebar">
        <header>
          <div className="iconcompany">
            <img src={iconCompany} alt="iconcompany" />
          </div>
        </header>
        <center>
          <div className="iconuser">
            <img src={ImgIcon} className="profile_image" alt="user" />
          </div>
          <h4>Name.user</h4>
          <h4>Email.user</h4>
        </center>
        <ul>
          <li>
            <Link to="/users">
              <span>User Actions</span>
            </Link>
          </li>
          <li>
            <Link to="/issues">
              <span>Issues Actions </span>
            </Link>
          </li>
        </ul>
        <div className="logout btn btn-outline-warning">
          Logout{/* <Logout /> */}
        </div>
      </div>
      <div className="container">
        <h1>container</h1>
      </div>
    </div>
  );
}
export default Sidebar;
