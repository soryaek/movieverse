import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;
  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
        <div class="overview-overlay">
          <h5 class="overview-title">{movie.title}</h5>
          {/* <p className="overview">{movie.overview}</p> */}
          <p className="rating">Rating: {movie.vote_average}/10</p>
       
          <p className="overview">{movie.overview.substring(0,100)}</p>
        </div>
      </div>

      <div className="info">
        <div className="header">
          <h4 className="release-date">(<Moment format="YYYY">{movie.release_date}</Moment>)</h4>
          {/* <p className="overview">{movie.overview}</p> */}
        </div>
        <div className="controls">
          <button
            className="btn"
            // disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
          Add to Favorite <i class="fas fa-heart"></i>
          </button>
         {/* <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
           <i class="fas fa-check"></i>
          </button>  */}
         
        </div>
      </div>
    </div>
  );
};
