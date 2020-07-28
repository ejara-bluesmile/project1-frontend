import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import RegisterIcon from "./register-icon.png";

function Register() {
  return (
    <div>
      <div className="row">
        <div className="modal-dialog text-center">
          <div className="col-sm-12 main-section">
            <div className="modal-content">
              <div className="col-12 user-img">
                <img src={RegisterIcon} alt="iconuser" />
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
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Lastname"
                    />
                    <Link to="/">
                      <button type="submit" className="btn btn-danger">
                        Register
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
