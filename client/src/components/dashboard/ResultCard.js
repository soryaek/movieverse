import React, { useState, useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../../context/GlobalState";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { SimilarMovies } from "./SimilarMovies";
import {Trailer} from './Trailer/Trailer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const style = {
  position: 'absolute',
  top: '20%',
  left: '30%',
  transform: 'translate(-50%, -50%)Modal',
  width: '40%',
  bgcolor: 'black',
  p: 4,
  color: 'white',
  height: '700px',
  overflow:'auto',
  scrollbarWidth: 'thin', // For Firefox: make scrollbar thin
};

export const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);
  console.log("storedMovieWatched", storedMovieWatched);

  const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
  const watchedDisabled = storedMovieWatched ? true : false;

  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    showTrailer(true);
  }
  
  const handleClose = () => {
    setOpen(false)
    setMore(false)
    setTrailer(false);
  };

  const [more, setMore] = useState(false);
  const [trailer,setTrailer] = useState(false);

  const viewMore = () => {
    setMore(true)
    setTrailer(false);
  }
  const showTrailer = () => {
    setTrailer(true);
  }

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            onClick={handleOpen}
          />
        ) : (
            <div className="filler-poster">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={`${movie.title} Poster`}
                onClick={handleOpen} />
            </div>
          )}

        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <button onClick={handleClose} className="btn-close">X</button>
            <div className="title-bookmark">
              {movie.title ? <h4>{movie.title}</h4> : <h4>Not Available</h4>}
              <FontAwesomeIcon className="faBookmark-icon" icon={faBookmark} onClick={() => addMovieToWatchlist(movie)} title="Add to favorite"/> &nbsp;
            </div>
            <div>Released Date: {movie.release_date}</div>
            <div>Vote: {movie.vote_average}/10</div><br />
            <div>Overview:  {movie.overview}</div><br />
            <div className="trailer-btn" onClick={showTrailer}>WATCH TRAILER &nbsp;&nbsp;
              <FontAwesomeIcon icon={faPlay} /> &nbsp;
            </div>
            {trailer &&  <Trailer id={movie.id}/> }
            <div className='view-more-btn' onClick={viewMore}> SIMILAR MOVIES &nbsp;&nbsp; </div> 
            { more ? <SimilarMovies id={movie.id} /> : ''}
          </Box>
        </Modal>
      </div>

      <div className="info">
        <div className="header">
          {movie.release_date ? (
            <h4 className="release-date">{movie.release_date}</h4> 
          ):(
            <h4 className="release-date"><Moment format="YYYY">{movie.release_date}</Moment></h4>
          )}
        </div>
        <div className="controls">
          {!watchlist[movie.id] &&
            <button onClick={() => addMovieToWatchlist(movie)}> Add to Favorite </button>
          }
        </div>
      </div>
    </div>
    
  );
};
