import React, { useState,useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { Footer } from "./footer";
import { Header } from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
//modal
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import emailjs from "../../../node_modules/emailjs-com"

const style = {
  position: 'absolute',
  top: '40%',
  left: '37%',
  transform: 'translate(-50%, -50%)Modal',
  width: 510,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  color: 'black'
};

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //send email
  function SendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_n6r0mfs', 'template_nrnujnc', e.target, 'user_Ixb5JZenDckaXg00c43We').then(res => {
      console.log(res);
    }).catch(err => console.log(err));
    e.target.reset();
    handleClose();
  }

  return (
    <div>
      <Header />
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h3 className="heading">My Watchlist</h3>
            <div className="flt-right">
              <button className="count-pill" onClick={handleOpen}>
                <FontAwesomeIcon icon={faShareSquare} />
              </button>
              <span className="count-pill">
                {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
              </span>
            </div>
  
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Want to share your watchlist? Enter an email below!
              </Typography>
              <form onSubmit={SendEmail} >
                    <input type="email" name="email" required/>
                    {watchlist.length > 0 ? (
                        <div className="movie-grid">
                            {watchlist.map((movie) => (
                                <div>
                                    <input type="hidden" name='title' value={movie.title} />
                                    <input type="hidden" name='poster' value={`src=https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
                                </div>
                            ))}
                        </div>
                    ) : (<input type="hidden" name="no-movies" value="No movies in your list! "/> )}

                    <input className="text-center btn btn-primary btn-send" type='submit' value='Send' />
                </form>
            </Box>
            
          </Modal>
          {watchlist.length > 0 ? (
            <div className="movie-grid">
              {watchlist.map((movie) => (
                <MovieCard movie={movie} key={movie.id} type="watchlist" />
              ))}
            </div>
          ) : (
            <div className="no-movie-container">
              <h5 className="no-movies">No movies in your watchlist!</h5>
              {/* <img src="popcorn.jpg" /> */}
            </div>
            )}
        </div>

      </div> <br/> <br/> <br/>
      <Footer />
    </div>
  );
};