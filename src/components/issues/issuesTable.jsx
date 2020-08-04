import React, { Component } from "react";
//import auth from "../services/authService";
import { Link } from "react-router-dom";
import Table from "../common/table";
//import Like from "./common/like";

class IssuesTable extends Component {
    issues= [{
        title: "titulo",
        description: "descripción",
        user: "usuario",
        status: "estado"
    },
    {
        title: "titulo2",
        description: "descripción2",
        user: "usuario2",
        status: "estado2"
    }]
    columns = [
        {
            path: "title",
            label: "Title",
        },
        { path: "description", label: "Description" },
        { path: "user", label: "User" },
        {
            key: "status",
            content: issue => (
                <select name={issue.title} id={issue} onChange={() => this.selectChange(this.onChange)} className="form-control">
                    <option value="" />
                    {this.issues.map(option => (
                        <option key={option._id} value={option._id}>
                            {option.title}
                        </option>
                    ))}
                </select>
            )
        },
        {
            key: "edit",
            content: issue => (
                <Link to={`/issuesForm/${issue._id}`}>
                    <button
                        className="btn btn-primary btn-sm">
                        <i className="fa fa-pencil-square-o"
                            aria-hidden="true">
                        </i>
                    </button>
                </Link>
            )
        },
        {
            key: "delete",
            content: issue => (
                <button
                    onClick={() => this.props.onDelete(issue)}
                    className="btn btn-danger btn-sm"
                >
                    <i className="fa fa-trash"
                        aria-hidden="true">
                    </i>
                </button>
            )
        }

    ];
    // constructor() {
    //     //     super();
    //     //     const user = auth.getCurrentUser();
    //     //     if (user && user.isAdmin) this.columns.push(this.deleteColumn);
    // }

    selectChange (status) {
        console.log("Cambió a")
    }

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
