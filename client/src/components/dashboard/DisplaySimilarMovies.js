import React, {useState, useEffect} from 'react';
import './css/DisplaySimilarMovies.css'

export const DisplaySimilarMovies= ({movie, index}) => {
    const [limit, setLimit] = useState(4);


    return (
        <div className="similar-movie">
            { index < limit ?  
                <div className="similar-movie-container">
                    {movie.poster_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={`${movie.title} Poster`}
                        />
                        ) : (
                            <div className="filler-poster">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                alt={`${movie.title} Poster`} />
                            </div>
                    )}
                </div>
            : 
            ''}

        

        </div>
    )
}