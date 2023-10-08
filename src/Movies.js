import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";
import noimage from './img/noimage.jpeg';
import CircularProgress from '@mui/material/CircularProgress';

const Movies = () => {
    const { isLoading, movie, query, setQuery, isError } = useGlobalContext();
    if (isLoading) {
        return (
            <>
                <div className="search-container">
                    <div className="search-rel">
                        <input
                            type="text"
                            className="search-box"
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder=" " />
                        <div className="place-holder">Search Any Movie Here...</div>
                        <div className="er-msg">{isError && isError.msg}</div>
                    </div>
                </div>
                <div className="loading movie-load"><CircularProgress color="inherit" /></div>
            </>
        );
    }
    return (
        <>
            <div className="search-container">
                <div className="search-rel">
                    <input
                        type="text"
                        className="search-box"
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder=" " />
                    <div className="place-holder">Search Any Movie Here...</div>
                    <div className="er-msg">{isError && isError.msg}</div>
                </div>
            </div>
            <div className="container">
                {
                    movie.map((curMovie) => {
                        let movieName = curMovie.Title.substring(0, 25);
                        if (curMovie.Title.length >= 25) {
                            movieName = `${movieName}...`
                        }
                        let poster;
                        if (curMovie.Poster === 'N/A') {
                            poster = noimage;
                        } else {
                            poster = curMovie.Poster;
                        }
                        return (
                            <NavLink to={`movies/${curMovie.imdbID}`} key={curMovie.imdbID} style={{ textDecoration: 'none' }}>
                                <div className="card">
                                    <img src={poster} className="poster" alt="movie-poster" />
                                    <div className="title">{movieName}</div>
                                </div>
                            </NavLink>
                        );
                    })
                }
            </div>
        </>
    );
}

export default Movies;