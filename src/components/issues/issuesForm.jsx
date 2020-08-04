import React from "react";
import Joi from "joi-browser";
import Form from '../common/form';
import "./issues.css"
import SideBar from "../sideBar";
// import { getTodo, saveTodo } from '../services/todoService';

import IconEdit from "../../resource/edit.png";

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

    async componentDidMount() {
        try {
            const issueId = this.props.match.params.id;
            if (issueId === "new") return;

            // const { data: user } = await getIssue(issueId);
            // this.setState({ data: this.mapToViewModel(user) });
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                this.props.history.replace("/not-found");
        }
    }
    mapToViewModel(issue) {
        return {
        title: issue.title,
        description: issue.description,
        user: issue.user,
        status: issue.status
        };
    }
    doSubmit = async () => {
        console.log(this.state.data)
        // await saveTodo(this.state.data);
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="row">
                <div className="col-2">
                    <SideBar />
                </div>
                <div className="container col-10 userForm">
                    <div className="modal-dialog text-center">
                        <div className="col-sm-10 main-section">
                            <div className="modal-content">
                                <div className="col-12 icon-img">
                                    <img src={IconEdit} alt="iconedit" />
                                </div>
                                <div className="col-12 form-input">
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
        )
    }
}
export default IssuesForm;