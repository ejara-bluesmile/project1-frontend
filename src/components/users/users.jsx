import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import UsersTable from "./userTable";
import Pagination from "../common/pagination";
import { getUsers, deleteUser } from "../../services/usersService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "../searchBox";
import Sidebar from "../sideBar";
import NavBar from "../navBar";

class Users extends Component {
  state = {
    users: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const { data: users } = await getUsers();
    this.setState({ users });
  }

  handleDelete = async (user) => {
    const originalUsers = this.state.users;
    const users = originalUsers.filter((u) => u._id !== user._id);
    this.setState({ users });

    try {
      await deleteUser(user._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("The user was deleted.");

      this.setState({ users: originalUsers });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      users: allUsers,
    } = this.state;

    let filtered = allUsers;
    if (searchQuery)
      filtered = allUsers.filter((m) =>
        m.email.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const users = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: users };
  };

  render() {
    const { length: count } = this.state.users;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { user } = this.props;

    if (count === 0)
      return (
        <div>
          <Sidebar />
          {/* <NavBar /> */}
          <p>There are no movies in the database.</p>
        </div>
      );

    const { totalCount, data: users } = this.getPagedData();

    return (
      <div>
        <Sidebar />
        {/* <NavBar /> */}
        <div className="row">
          <div className="col">
            {user && (
              <Link
                to="/user/new"
                className="btn btn-primary"
                style={{ marginBottom: 20 }}
              >
                New User
              </Link>
            )}
            <p>Showing {totalCount} users in the database.</p>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <UsersTable
              users={users}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
