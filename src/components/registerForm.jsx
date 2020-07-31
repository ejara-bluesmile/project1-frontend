import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { Link } from "react-router-dom";
import "./common/common.css";
import IconRegister from "../resource/register-icon.png";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", name: "", lastname: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
    lastname: Joi.string().required().label("Lastname"),
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
                <img src={IconRegister} alt="iconregister" />
              </div>
              <div className="col-12 form-input">
                <form onSubmit={this.handleSubmit}>
                  {this.renderInput("name", "Name")}
                  {this.renderInput("lastname", "Lastname")}
                  {this.renderInput("email", "Email")}
                  {this.renderInput("password", "Password", "password")}
                  {this.renderButton("Register")}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
