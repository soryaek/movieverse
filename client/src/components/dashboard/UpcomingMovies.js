import React, {useState, useEffect} from 'react';
import {ResultCard} from "./ResultCard";
import {SearchAdd} from "./SearchAdd";
import {Header} from './Header'

export const UpcomingMovies = () => {
    const [upcomingMovies, setUpcomingMovies] = useState(""); 
    const getUpcomingMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=a64879763b86ab20c959a57ad7c5d005&language=en-US&page=1&adult=false`)
        .then(res => res.json())
        .then((data) => {
            if(!data.errors){
                setUpcomingMovies(data.results);
            } else {
                setUpcomingMovies([]); 
            }
        });
    }; 

    useEffect(() => {
        getUpcomingMovies();
    }, []); 
    
    return (
        <div>  
            <Header />
            <div className="add-page" onLoad={getUpcomingMovies}>
                <h4 className="upcoming-movies type">Upcoming Movies</h4>
            </div>
            {upcomingMovies.length > 0 && (
                    <ul className="results">
                        {upcomingMovies.map(movie => (
                            <li key={movie.id}>
                                <ResultCard movie={movie}/> 
                            </li>
                        )) }
                    </ul>
            )}
    </div>
    );
};
