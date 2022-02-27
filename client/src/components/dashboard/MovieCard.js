import React from 'react';
import {MovieControls } from './MovieControls';
import ReactStars from "react-rating-stars-component";
import {Rating} from "./Rating/rating"


export const MovieCard = ({ movie, type }) => { //type will be determined whether the movie will be added into watchlist or watched
  
  return (
    <div>
      <div className="movie-card">
        <div className="overlay"></div>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
        <MovieControls type={type} movie={movie} />
      </div>
      {type === 'watched' ? <Rating movie={movie} /> : null}
    </div>
    );
  };
