
import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { MovieCard } from "./MovieCard";
import {Footer } from "./footer";
import {Header} from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShareSquare} from '@fortawesome/free-solid-svg-icons';
import SendEmail from "./SendEmail";
import { Link } from "react-router-dom";


export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div>
      <Header/>
        <div className="movie-page">
          <div className="container">
            <div className="header">
              <h1 className="heading">My Watchlist</h1>

              <span className="count-pill">
                {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
              </span>
            </div>

            <Link to="/sendemail">
              <span>
                <button className="count-pill" oncClick={SendEmail}>
                  <FontAwesomeIcon icon={faShareSquare} />    
                </button>
              </span>
              </Link>

            {watchlist.length > 0 ? (
              <div className="movie-grid">
                {watchlist.map((movie) => (
                  <MovieCard movie={movie} key={movie.id} type="watchlist" />
                ))}
              </div>
            ) : (
              <h5 className="no-movies">No movies in your list!</h5>
            )}
          </div>
         
        </div>
        <Footer />
    </div> 
  );
};