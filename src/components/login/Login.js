import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

import UserIcon from "./user-icon.png";

function Login() {
  return (
    <div className="row">
      <div className="modal-dialog text-center">
        <div className="col-sm-12 main-section">
          <div className="modal-content">
            <div className="col-12 user-img">
              <img src={UserIcon} alt="iconlogin" />
            </div>
            <div className="col-12 form-input">
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                  />
                  <button type="submit" className="btn btn-danger">
                    Enter
                  </button>
                </div>
              </form>
            </div>
            <div className="col-12 forgot">
              <Link to="/register">Create new user</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
