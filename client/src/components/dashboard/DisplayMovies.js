import React, {useState, useEffect} from 'react';
import {ResultCard} from "./ResultCard";
import {Footer} from './footer';
import {Header} from './Header';

export const DisplayMovies = ({type}) => {
    const [movies, setMovies] = useState(""); 
    const [header, setHeader] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    let path = '';

    if (type === 'now_playing' || type === 'top_rated' ||  type === 'upcoming') {
        path = `movie/${type}`
    }
    if (type === 'trending/all/day') {
        path = `${type}`;
    }
    if (type === 'AZ') {
        path = 'movie/now_playing'
    } 
    
    const getMovies = (pageNumber) => {
        fetch(`https://api.themoviedb.org/3/${path}?api_key=a64879763b86ab20c959a57ad7c5d005&language=en-US&page=${pageNumber}&adult=false`)
        .then(res => res.json())
        .then((data) => {
            if(!data.errors){
                setMovies(data.results);
            } else {
                setMovies([]); 
            }
        });
    }; 
    
    const getHeader = (header) => {
        switch (type) {
            case "now_playing":
                setHeader("Now Playing")
                break;
            case "top_rated":
                setHeader("Top Rated Movies")
                break;
            case "trending/all/day":
                setHeader("Popular Movies")
                break;
            case "upcoming":
                setHeader("Upcoming Movies")
                break;
            case "AZ":
                setHeader("")
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        getMovies(pageNumber);
        getHeader(type); 
    }, []); 

    const handleClick = (pageNum) => { 
        if (pageNum !== pageNumber & pageNum >= 1) {
            setPageNumber(pageNum); //set new page number into pageNumber
            getMovies(pageNum);
            getHeader(type); 
        }
    }

    return (
        <div>
            {/* {type !== 'AZ' ? <Header /> : null} */}
            <div className="add-page" onLoad={getMovies}>
                <h4 className="top-rated-movies type">{header}</h4>
            </div>
            <div className="prev-next-btns">
                <button className="prev-next-btn" onClick={() => handleClick(pageNumber-1)}>PREV</button> 
                <button className="prev-next-btn" onClick={() => handleClick(1)}>1</button> 
                <button className="prev-next-btn" onClick={() => handleClick(2)}>2</button> 
                <button className="prev-next-btn" onClick={() => handleClick(3)}>3</button> 
                <button className="prev-next-btn" onClick={() => handleClick(4)}>4</button> 
                <button className="prev-next-btn" onClick={() => handleClick(pageNumber+1)}>NEXT</button> 
            </div> 
            {movies.length > 0 && (
                <ul className="results">
                    {movies.map(movie => (
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
