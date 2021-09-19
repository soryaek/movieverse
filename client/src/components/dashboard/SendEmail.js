import React, { useContext } from "react";
import emailjs from 'emailjs-com'
import { GlobalContext } from "../../context/GlobalState";
import { MovieCard } from "./MovieCard";



export default function SendEmail() {
    const { watchlist } = useContext(GlobalContext);

    function mail(e) {
        e.preventDefault();
        emailjs.sendForm('service_n6r0mfs', 'template_nrnujnc', e.target, 'user_Ixb5JZenDckaXg00c43We').then(res => {
            console.log(res);
        }).catch(err => console.log(err));
        e.target.reset();
    }


    return (
        <div>
            <h1> Contact Form </h1>
            <form onSubmit={mail}>
                <label>Email</label>
                <input type="email" name="email" />
                {watchlist.length > 0 ? (
                    <div className="movie-grid">
                        {watchlist.map((movie) => (
                            <div>
                                <input type="hidden" name='title' value={movie.title} />
                                <input type="hidden" name='poster' value={`src=https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
                            </div>
                        ))}
                    </div>
                ) : (
                        <h5 className="no-movies">No movies in your list!</h5>
                    )}

                <input type='submit' value='Send' />


            </form>

        </div>
       
    )
}
