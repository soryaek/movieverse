
import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { MovieCard } from "./MovieCard";
import {Header} from "./Header";
import { Footer } from "./footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShareSquare} from '@fortawesome/free-solid-svg-icons';

export const Watched = () => {
  const { watched } = useContext(GlobalContext);
    // const sendEmail = () => {

    // }

    return (
      <div>
        <Header/>
          <div className="movie-page">
            <div className="container">
              <div className="header">
                <h1 className="heading">Watched Movies</h1>

                <span className="count-pill">
                  {watched.length} {watched.length === 1 ? "Movie" : "Movies" }
                </span>

                {/* <span className="count-pill">
                  <button onClick={this.sendEmail()}>
                    <FontAwesomeIcon icon={faShareSquare} />    
                  </button>
                </span> */}

              </div>
              {watched.length > 0 ? (
                <div className="movie-grid">
                  {watched.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} type="watched" />
                  ))}
                </div>
              ) : (
                <h2 className="no-movies">No movies in your list!</h2>
              )}
            </div>
            <Footer />
          </div>
      </div>
  );
};