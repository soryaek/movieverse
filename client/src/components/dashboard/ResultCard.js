import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../../context/GlobalState";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';



const style = {
  position: 'absolute',
  top: '30%',
  left: '30%',
  transform: 'translate(-50%, -50%)Modal',
  width: '40%',
  bgcolor: 'black',
  p: 4,
  color: 'white'
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

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
      ? true
      : false;
  const watchedDisabled = storedMovieWatched ? true : false;

  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <button onClick={handleClose} className="btn-close">X</button>
            <h4>{movie.title}</h4><br />
            <div>Released Date: {movie.release_date}</div>
            <div>Vote: {movie.vote_average}</div><br />
            <div>Overview:  {movie.overview}</div>
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
          <button
            onClick={() => addMovieToWatchlist(movie)}
          > Add to Favorite   
         </button>
        </div>
      </div>
    </div>
  );
};
