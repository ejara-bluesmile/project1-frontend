import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import NavBar from "../Navbar";
import SideBar from "./sideBar";
import "./common.css";

class UserForm extends Form {
  state = {
    data: [
      { username: "e", password: "e", name: "e", lastname: "e" },
      { username: "a", password: "a", name: "a", lastname: "a" },
    ],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(1).label("Password"),
    name: Joi.string().required().label("Name"),
    lastname: Joi.string().required().label("Lastname"),
  };

  // async populateUser() {
  //   try {
  //     const UserId = this.props.match.params.id;
  //     if (UserId === "new") return;

  //     const { data: user } = await getMovie(userId);
  //     this.setState({ data: this.mapToViewModel(user) });
  //   } catch (ex) {
  //     if (ex.response && ex.response.status === 404)
  //       this.props.history.replace("/not-found");
  //   }
  // }

  // async componentDidMount() {
  //   await this.populateMovie();
  // }

  // mapToViewModel(user) {
  //   return {
  //     _id: user._id,
  //     name: user.name,
  //     lastname: user.lastname,
  //     email: user.email,
  //     password: user.password,
  //   };
  // }

  // doSubmit = async () => {
  //   // await saveUser
  //   console.log(this.state.data);

  //   this.props.history.push("/user");
  // };

  render() {
    return (
      <div>
        <NavBar />
        <div className="">
          <div className="row">
            <div className="col-2">
              <SideBar />
            </div>
            <div className="col-12 modal-dialog text-center">
              <div className="main-section">
                <div className=" modal-content modal-content-userform">
                  <div className="modal-userform">
                    <form onSubmit={this.handleSubmit}>
                      {this.renderInput("name", "Name")}
                      {this.renderInput("lastname", "Lastname")}
                      {this.renderInput("email", "Email")}
                      {this.renderInput("password", "Password", "password")}
                      {this.renderButton("Save")}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;
