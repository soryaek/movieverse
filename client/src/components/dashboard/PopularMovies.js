import React, {useState, useEffect} from 'react';
import {ResultCard} from "./ResultCard";
import { Footer } from "./footer";
import {Header} from './Header'

export const PopularMovies = (num) => {
    const [popularMovies, setPopularMovies] = useState(""); 
    const getPopularMovies = () => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=a64879763b86ab20c959a57ad7c5d005&adult=false`)
        .then(res => res.json())
        .then((data) => {
            if(!data.errors){
                setPopularMovies(data.results);
            } else {
                setPopularMovies([]); //if there is an error, set result to an empty array
            }
        });
    }; 

    useEffect(() => {
        getPopularMovies();
    }, []); 
    
    const count = 0
    return (
        <div>  
            <Header />
            <div className="add-page" onLoad={getPopularMovies}>
                <h4 className="popular-movies type">Popular Movies</h4>
            </div>
            {popularMovies.length > 0 && (
                <ul className="results">
                    {popularMovies.map(movie => (
                        <li key={movie.id}>
                            <ResultCard movie={movie}/> 
                        </li>
                    )) }
                </ul>
            )}
             <br/> <br/> <br/>
           <Footer />
    </div>
    );
};
