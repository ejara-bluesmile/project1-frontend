import React from "react";
import "./common/common.css";

const NavBar = () => {
  return (
    <div>
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
      <div className="content"></div>
    </div>
  );
};

export default NavBar;
