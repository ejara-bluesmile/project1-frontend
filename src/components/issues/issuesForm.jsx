import React from "react";
import Joi from "joi-browser";
import Form from '../common/form';
import "./issues.css"
import SideBar from "../sideBar";
// import { getTodo, saveTodo } from '../services/todoService';

class IssuesForm extends Form {
    state = {
        data: {
            title: "",
            userId: "5f1dbdba901e6c667e3d8dd8",
            completed: false
        },
        errors: {}
    };

    schema = {
        id: Joi.string(),
        title: Joi.string().required().label("Title"),
        project: Joi.string().required().label("Project"),
        user: Joi.string().required().label("User"),
        description: Joi.string().required().label("Description"),
    };

    // async componentDidMount() {
    //     const todoId = this.props.match.params.id;
    //     if (todoId === "new") return;
    //     const { data: todo} = await getTodo(todoId);
    //     if (!todo) return this.props.history.replace("/");
    //     this.setState( {data: this.mapToViewModel(todo) });
    // }
    // mapToViewModel(todo) {
    //     return {
    //         _id: todo._id,
    //         title: todo.title,
    //         userId: todo.user._id,
    //         completed: todo.completed
    //     };
    // }
    // doSubmit = async () => {
    //     console.log(this.state.data)
    //     await saveTodo(this.state.data);
    //     this.props.history.push("/");
    // }
    render() {
        return (
            <div>
                {/* <NavBar /> */}
                <div className="">
                    <div className="row">
                        <div className="col-2">
                            <SideBar />
                        </div>
                        <div className="col-10 modal-dialog text-center">
                            <div className="main-section">
                                <div className=" modal-content modal-content-userform">
                                    <div className="modal-userform">
                                        <h1>Create Issue</h1>
                                        <form onSubmit={this.handleSubmit}>
                                            {this.renderInput("title", "Titulo")}
                                            {this.renderInput("project", "Project")}
                                            {this.renderInput("user", "User")}
                                            {this.renderTextarea("description", "Description")}
                                            {this.renderButton("Create")}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default IssuesForm;