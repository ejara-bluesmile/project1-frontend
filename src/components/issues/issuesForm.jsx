import React from 'react';
import Form from '../common/form';
import Card from '../common/card';
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
            <div className="row">
                <div className="col-3">
                    <Card></Card>
                </div>
                <div className="col-8">
                    <h1>Create Issue</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("title", "Titulo")}
                        {this.renderInput("project", "Project")}
                        {this.renderInput("user", "User")}
                        {this.renderInput("telefono", "Telefono")}
                        {this.renderTextarea("description", "Description")}
                        {this.renderButton("Create")}
                    </form>
                </div>
            </div>
        )
    }
}
export default IssuesForm;