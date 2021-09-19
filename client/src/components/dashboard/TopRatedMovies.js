import React, {useState, useEffect} from 'react';
import {ResultCard} from "./ResultCard";
import {Header} from './Header'
import {Footer} from './footer'
 
export const TopRatedMovies = (num) => {
    const [topRatedMovies, setTopRatedMovies] = useState(""); 
    const getTopRatedMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=a64879763b86ab20c959a57ad7c5d005&language=en-US&page=1&adult=false`)
        .then(res => res.json())
        .then((data) => {
            if(!data.errors){
                setTopRatedMovies(data.results);
            } else {
                setTopRatedMovies([]); //if there is an error, set result to an empty array
            }
        });
    }; 

    useEffect(() => {
        getTopRatedMovies();
    }, []); 
    
    return (
        <div>  
            <Header />
            <div className="add-page" onLoad={getTopRatedMovies}>
                <h4 className="top-rated-movies type">Top Rated Movies</h4>
            </div>
            {topRatedMovies.length > 0 && (
                    <ul className="results">
                        {topRatedMovies.map(movie => (
                            <li key={movie.id}>
                                <ResultCard movie={movie}/> 
                            </li>
                        )) }
                    </ul>
            )} <br/> <br/> <br/>
            <Footer />
    </div>
    );
};
