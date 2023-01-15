import React, {useState} from 'react';
import { Trailer } from '../dashboard/Trailer/Trailer';
import { ResultCard } from '../dashboard/ResultCard';

import './css/DisplaySimilarMovies.css'

export const  DisplaySimilarMovies= ({movie, index}) => {
    const limit = 4;
    // const [viewTrailer, setViewTrailer] = useState(false);
    // const handleClick = () => {
    //     setViewTrailer(true);
    // }
    return (
        <div className="similar-movie">
            { index < limit ?  
                <div className="similar-movie-container">
                    {/* {movie.poster_path ? (
                        <button onClick={() => handleClick()}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={`${movie.title} Poster`}
                            />
                        </button>
                        ) : (
                            <div className="filler-poster">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                alt={`${movie.title} Poster`} />
                            </div>
                    )} */}
                    <div style={{width:'25px'}}>
                        <ResultCard style={{margin:'10px'}} movie={movie} />
                    </div>
                </div>
            : 
            ''}

                           

        </div>
    )
}