import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { getUser, saveUser } from "../../services/usersService";
// import NavBar from "../navBar";
import SideBar from "../sideBar";
import "../common/common.css";
import IconEdit from "../../resource/edit.png";

class UserForm extends Form {
  state = {
    data: { email: "", password: "", name: "", lastname: "", createdAt: "" },
    errors: {},
  };

  schema = {
    id: Joi.string(),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(1).label("Password"),
    name: Joi.string().required().label("Name"),
    lastname: Joi.string().required().label("Lastname"),
    createdAt: Joi.string(),
  };

  async populateUser() {
    try {
      const userId = this.props.match.params.id;
      if (userId === "new") return;

      const { data: user } = await getUser(userId);
      this.setState({ data: this.mapToViewModel(user) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateUser();
  }

  mapToViewModel(user) {
    return {
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
    };
  }

  doSubmit = async () => {
    await saveUser(this.state.data);

    this.props.history.push("/users");
  };

  render() {
    return (
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="container col-10 userform">
          <div className="modal-dialog text-center">
            <div className="col-sm-10 main-section">
              <div className="modal-content">
                <div className="col-12 icon-img">
                  <img src={IconEdit} alt="iconedit" />
                </div>
                <div className="col-12 form-input">
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

      // <div>
      //     <div className="row">
      //       <div className="col-2">
      //         <SideBar />
      //       </div>
      //       <div className="modal-content">
      //         <div className="col-12 user-img">
      //           <img src={IconEdit} alt="iconregister" />
      //         </div>
      //         <div className="col-10 modal-dialog text-center">
      //           <div className="main-section">
      //             <div className=" modal-content modal-content-userform">
      //               <div className="modal-userform">
      //                 <form onSubmit={this.handleSubmit}>
      //                   {this.renderInput("name", "Name")}
      //                   {this.renderInput("lastname", "Lastname")}
      //                   {this.renderInput("email", "Email")}
      //                   {this.renderInput("password", "Password", "password")}
      //                   {this.renderButton("Save")}
      //                 </form>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default UserForm;
