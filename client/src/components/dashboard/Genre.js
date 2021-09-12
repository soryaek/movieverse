import React from "react";
import { Link } from "react-router-dom";
import {Footer} from './footer';
import {Header} from "./Header";

export const Genre = () => {
    return (
        <div>
            <Header />
            <div>  
            <ul className="genre-category">
                <li class="genre-item">
                    <Link to="/popularmovies">Popular Movies</Link>
                </li>
                <li class="genre-item">
                    <Link to="/upcomingmovies">Upcoming Movies</Link>
                </li>
                <li class="genre-item">
                    <Link to="/topratedmovies">Top Rated Movies</Link>
                </li>
                <li class="genre-item">
                    <Link to="/nowplaying">Now Playing</Link>
                </li>
                </ul>
                <Footer />
            </div>
    </div>
    );
};
