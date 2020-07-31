import React, { Component } from "react";
//import { getSongs } from '../services/songService';
//import { Link } from 'react-router-dom';
import IssuesTable from "./issuesTable";
import Sidebar from "../sideBar";
// import Like from './common/like'
// import SearchBox from "./searchBox";

class Issues extends Component {
    state = {
        songs: [{
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
        //   songs: getSongs(),
        searchQuery: ""
    };
    handleSearch = query => {
        this.setState({ searchQuery: query });
    };
    handleDelete = (song) => {
        const songs = this.state.songs.filter(s => s._id !== song._id);
        this.setState({ songs });
    }
    handleLike = song => {
        const songs = [...this.state.songs];
        const index = songs.indexOf(song);
        songs[index] = { ...songs[index] }
        songs[index].liked = !songs[index].liked;
        this.setState({ songs });
    }
    getPagedData = () => {
        const {
            searchQuery,
            songs: allSongs
        } = this.state;
        let filtered = allSongs;
        if (searchQuery)
            filtered = allSongs.filter(m =>
                m.titulo.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
                m.artista.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
                m.genero.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        return { totalCount: filtered.length, data: filtered };
    };
    render() {
        // const { length: count } = this.state.songs;
        // if (count === 0) 
        //     return <p>No hay canciones en la base de datos</p>;
        // const { totalCount, data: songs} = this.getPagedData();
        console.log("aquiiiiiiiii", this.state.songs);
        return (
            <div className="row">
                <div className="col-2"><Sidebar/></div>
                <div className="col-12 modal-dialog text-center">
                    <h1>Issues actions</h1>
                    {/* <p>Hay {totalCount} canciones en la base de datos</p>
           <SearchBox value={shis.state.searchQuery} onChange={this.handleSearch} />*/}

                    <IssuesTable
                        issues={this.state.songs} />
                </div>
            </div>
        );
    }
}
export default Issues;