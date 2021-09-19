
import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { Footer } from "./footer";
import { Header } from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import SendEmail from "./SendEmail";
import { Link } from "react-router-dom";
//modal
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import emailjs from 'emailjs-com'


const style = {
  position: 'absolute',
  top: '40%',
  left: '38%',
  transform: 'translate(-50%, -50%)Modal',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'black'
};

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  //modal
  const [open, setOpen] = React.useState(false);
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
            <h1 className="heading">My Watchlist</h1>

            <span className="count-pill">
              {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
            </span>
          </div>

          <span>
            <button className="count-pill" onClick={handleOpen}>
              <FontAwesomeIcon icon={faShareSquare} />
            </button>
          </span>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Enter email below to share your watchlist!
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
                    
                    <input type='submit' value='Send' />
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
              <h5 className="no-movies">No movies in your list!</h5>
            )}
        </div>

      </div>
      <Footer />
    </div>
  );
};