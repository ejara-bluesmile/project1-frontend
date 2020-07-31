import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import IconLogin from "../resource/user-icon.png";
import { Link } from "react-router-dom";
import "./common/common.css";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div className="container">
        <div className="modal-dialog text-center">
          <div className="col-sm-10 main-section">
            <div className="modal-content">
              <div className="col-12 user-img">
                <img src={IconLogin} alt="iconlogin" />
              </div>
              <div className="col-12 form-input">
                <form onSubmit={this.handleSubmit}>
                  {this.renderInput("username", "Username")}
                  {this.renderInput("password", "Password", "password")}
                  {this.renderButton("Login")}
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
}

export default LoginForm;
