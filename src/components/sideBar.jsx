import React from "react";
import "./common/common.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgIcon from "../resource/user.png";
import { Link } from "react-router-dom";
import Logout from "./logout";
import iconCompany from "../resource/bluesmile.png";

function Sidebar() {
  return (
    <div className="wrapper">
      <input type="checkbox" id="check" />
      <div className="sidebar">
        <div className="iconcompany">
          <img src={iconCompany} alt="iconcompany" />
        </div>
        <label for="check">
          <FontAwesomeIcon icon="bars" id="sidebar-btn" />
        </label>
        <center>
          <div>
            <img src={ImgIcon} className="profile_image" alt="user" />
          </div>
          <h4>Name.user</h4>
          <h4>Email.user</h4>
        </center>
        <div className="sidebar-nav">
          <Link to="/users">
            <span>User Actions</span>
          </Link>
          <Link to="/issues">
            <span>Issues Actions </span>
          </Link>
        </div>
        <div className="logout btn btn-outline-info">
          Logout{/* <Logout /> */}
        </div>
      </div>
    </div>
    // <div className="wraper">
    //   <input type="checkbox" id="check" />
    //   <label htmlFor="check">
    //     <i class="fa fa-bars" id="btn" />
    //     <i class="fa fa-times" id="cancel" />
    //   </label>
    //   <div className="sidebar">
    //     <header>
    //       <div className="iconcompany">
    //         <img src={iconCompany} alt="iconcompany" />
    //       </div>
    //     </header>
    //     <center>
    //       <div className="iconcompany">
    //         <img src={ImgIcon} className="profile_image" alt="user" />
    //       </div>
    //       <h4>Name.user</h4>
    //       <h4>Email.user</h4>
    //     </center>
    //     <ul>
    //       <li>
    //         <a href="">
    //           <i className="fa fa-qrcode"></i>Users
    //         </a>
    //       </li>
    //       <li>
    //         <a href="">
    //           <i className="fa fa-link"></i>Issues
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}
export default Sidebar;
