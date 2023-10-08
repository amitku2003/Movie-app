import React from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import imdb from './img/imdb.png';
import noimage from './img/noimage.jpeg';

const SingleMovie = () => {
    const { id } = useParams();
    console.log(id);
    const { response, loading, error } = useFetch(`&i=${id}`, {}, []);
    if (error.show == "True") {
        return (
            <>
                <div className="error-page">
                    <div className="error-container">
                        <h2 className="error-head">Error!</h2>
                        <p className="error-content">{error.msg}</p>
                        <NavLink to="/" style={{textDecoration : "none"}}>
                            <button className="error-btn">Go to Home Page<ArrowForwardIcon fontSize="large" /></button>
                        </NavLink>
                    </div>
                </div>
            </>
        );
    }
    let poster;
    if (response.Poster === 'N/A') {
        poster = noimage;
    } else {
        poster = response.Poster;
    }
    if (loading) {
        return (
            <>
                <div class="loading"><CircularProgress color="inherit" /></div>
            </>
        );
    }
    return (
        <>
            <div className="single-container">
                <div className="movie-container">
                    <NavLink to="/">
                        <div className="cross-btn"><CloseIcon sx={{ color: "inherit", fontSize: 35 }} /></div>
                    </NavLink>
                    <div class="s-poster">
                        <img className="l-poster" src={poster} alt="Movie Poster" />
                    </div>
                    <div className="s-content">
                        <div className="s-title">{response.Title}</div>
                        <div className="s-type">{response.Type}</div>
                        <div className="s-genre"><span>Genre : </span>{response.Genre}</div>
                        <div className="s-release"><span>Released on </span>{response.Released}</div>
                        <div className="s-country">{response.Country}</div>
                        <div className="s-plot"><span>Plot : </span>{response.Plot}</div>
                        <div className="s-actors"><span>Actors : </span>{response.Actors}</div>
                        <div className="s-director"><span>Directors : </span>{response.Director}</div>
                        <div className="s-writer"><span>Writers : </span>{response.Writer}</div>
                        <div className="s-rating"><img src={imdb} className="imdb-logo" alt="imdb-logo" /> {response.imdbRating}/10</div>
                        <NavLink to="/" style={{ textDecoration: 'none' }}>
                            <button class="back-btn"><ArrowBackIcon fontSize="large" sx={{ paddingRight: 1 }} /> Go Back</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleMovie;