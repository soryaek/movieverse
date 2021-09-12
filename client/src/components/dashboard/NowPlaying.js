import React, {useState, useEffect} from 'react';
import {ResultCard} from "./ResultCard";
import {Footer} from './footer';
import {Header} from './Header';

export const NowPlaying = () => {
    const [nowPlaying, setNowPlaying] = useState(""); 
    const getNowPlaying = () => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=a64879763b86ab20c959a57ad7c5d005&language=en-US&page=1&adult=false`)
        .then(res => res.json())
        .then((data) => {
            if(!data.errors){
                setNowPlaying(data.results);
            } else {
                setNowPlaying([]); 
            }
        });
    }; 
    useEffect(() => {
        getNowPlaying();
    }, []); 
    
    return (
        <div>  
            <Header />
            <div className="add-page" onLoad={getNowPlaying}>
                <h4 className="top-rated-movies type">Now Playing</h4>
            </div>
            {nowPlaying.length > 0 && (
                <ul className="results">
                    {nowPlaying.map(movie => (
                        <li key={movie.id}>
                            <ResultCard movie={movie}/> 
                        </li>
                    )) }
                </ul>
            )}
            <Footer />
    </div>
    );
};
