import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./common/common.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg active">
      <h3>Bluesmile</h3>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav"></div>
      </div>
    </nav>
  );
};

export default NavBar;
