import React, { Component } from "react";
//import { getSongs } from '../services/songService';
import { Link } from 'react-router-dom';
import IssuesTable from "./issuesTable";
import Sidebar from "../sideBar";
import Pagination from "../common/pagination";
import SearchBox from "../searchBox";
import { paginate } from "../utils/paginate";
import _ from "lodash";
// import Like from './common/like'
// import SearchBox from "./searchBox";

class Issues extends Component {
    
    state = {
        issues: [{
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
        }],
        currentPage: 1,
        pageSize: 4,
        searchQuery: "",
        sortColumn: { path: "title", order: "asc" }
    };
    handleSearch = query => {
        this.setState({ searchQuery: query });
    };
    handleDelete = (issue) => {
        const issues = this.state.issues.filter(s => s._id !== issue._id);
        this.setState({ issues });
    }

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
            issues: allIssues,
        } = this.state;

        let filtered = allIssues;
        if (searchQuery)
            filtered = allIssues.filter((i) =>
                i.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const issues = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: issues };
    };

    render() {
        const { length: count } = this.state.issues;
        const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
        const { issue } = this.props;

        if (count === 0)
            return (
                <div>
                    <Sidebar />
                    {/* <NavBar /> */}
                    <p>There are no issues in the database.</p>
                </div>
            );

        const { totalCount, data: issues } = this.getPagedData();

        return (
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <Sidebar />
                    </div>
                    <div className="col-10">
                        <h1>Issues actions</h1>
                        <SearchBox value={searchQuery} onChange={this.handleSearch} />
                        <Link
                            to="/issuesForm/new"
                            className="btn btn-info"
                            style= {{ marginBottom: 20, marginTop: 20}}
                        >
                            New issue
                        </Link>
                        <IssuesTable
                            issues={issues}
                            sortColumn={sortColumn}
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
export default Issues;