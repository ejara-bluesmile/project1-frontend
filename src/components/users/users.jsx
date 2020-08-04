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
import "../common/common.css";
import iconCompany from "../../resource/bluesmile.png";
import ImgIcon from "../../resource/user.png";

class Users extends Component {
  state = {
    users: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    sortColumn: { path: "email", order: "asc" },
  };

  async componentDidMount() {
    const { data: users } = await getUsers();
    this.setState({ users });
  }

  handleDelete = async (user) => {
    const originalUsers = this.state.users;
    const users = originalUsers.filter((u) => u.id !== user.id);
    this.setState({ users });

    try {
      await deleteUser(user.id);
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
          <p>There are no movies in the database.</p>
        </div>
      );

    const { totalCount, data: users } = this.getPagedData();

    return (
      <div className="">
        <div className="">
          {/* <Sidebar /> */}
          <div className="wraper">
            <input type="checkbox" id="check" />
            <label htmlFor="check">
              <i class="fa fa-bars" id="btn" />
              <i class="fa fa-times" id="cancel" />
            </label>
            <div className="sidebar">
              <header>
                <div className="iconcompany">
                  <img src={iconCompany} alt="iconcompany" />
                </div>
              </header>
              <center>
                <div className="iconuser">
                  <img src={ImgIcon} className="profile_image" alt="user" />
                </div>
                <h4>Name.user</h4>
                <h4>Email.user</h4>
              </center>
              <ul>
                <li>
                  <Link to="/users">
                    <span>User Actions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/issues">
                    <span>Issues Actions </span>
                  </Link>
                </li>
              </ul>
              <div className="logout btn btn-outline-warning">
                Logout{/* <Logout /> */}
              </div>
            </div>
            <div className="container">
              <div className="">
                <div className="content-table">
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
                    className="pagination"
                  />

                  {/* {user && ( */}
                  <Link
                    to="/users/new"
                    className="btn btn-primary"
                    id="btn-newuser"
                    // style={{ marginBottom: 20 }}
                  >
                    New User
                  </Link>
                  {/* )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
