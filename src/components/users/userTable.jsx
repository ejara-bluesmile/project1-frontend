import React, { Component } from "react";
// import auth from "../services/authService";
import { Link } from "react-router-dom";
import Table from "../common/table";

class UsersTable extends Component {
  columns = [
    {
      path: "email",
      label: "User",
      content: (user) => <Link to={`/users/${user.id}`}>{user.email}</Link>,
    },
    { path: "name", label: "Name" },
    // { path: "lastname", label: "Lastname" },
    {
      key: "delete",
      content: (user) => (
        <button
          onClick={() => this.props.onDelete(user)}
          className="btn btn-primary btn-sm"
        >
          Delete
        </button>
      ),
    },
    {
      key: "edit",
      content: (user) => (
        <button
          onClick={() => this.props.onEdit(user)}
          className="btn btn-info btn-sm"
        >
          Edit
        </button>
      ),
    },
  ];

  // constructor() {
  //   super();
  //   const user = auth.getCurrentUser();
  //   if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  // }

  render() {
    const { users, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={users}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default UsersTable;
