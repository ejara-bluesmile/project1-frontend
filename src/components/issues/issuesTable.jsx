import React, { Component } from "react";
//import auth from "../services/authService";
//import { Link } from "react-router-dom";
import Table from "../common/table";
//import Like from "./common/like";

class IssuesTable extends Component {
    columns = [
        {
            path: "title",
            label: "Title",
            //    content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        },
        { path: "description", label: "Description" },
        { path: "user", label: "User" },
        { path: "status", label: "Status" },
        {
            key: "edit",
            content: movie => (
                <button
                    onClick={() => this.props.onDelete(movie)}
                    className="btn btn-danger btn-sm"
                >
                    <i class="fa fa-pencil-square-o"
                        aria-hidden="true">
                    </i>
                </button>
            )
        },
        {
            key: "delete",
            content: movie => (
                <button
                    onClick={() => this.props.onDelete(movie)}
                    className="btn btn-danger btn-sm"
                >
                    <i class="fa fa-trash"
                        aria-hidden="true">
                    </i>
                </button>
            )
        }

    ];
    deleteColumn = {
        key: "delete",
        content: movie => (
            <button
                onClick={() => this.props.onDelete(movie)}
                className="btn btn-danger btn-sm"
            >
                Delete
            </button>
        )
    };
    // constructor() {
    //     //     super();
    //     //     const user = auth.getCurrentUser();
    //     //     if (user && user.isAdmin) this.columns.push(this.deleteColumn);
    // }
    render() {
        const { issues, onSort, sortColumn } = this.props;
        
        return (
            <Table
                columns={this.columns}
                data={issues}
                sortColumn={sortColumn}
                onSort={onSort}
            />
        );
    }
}

export default IssuesTable;
