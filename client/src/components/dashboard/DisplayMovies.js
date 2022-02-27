import React, {useState, useEffect} from 'react';
import {ResultCard} from "./ResultCard";
import {Footer} from './footer';
import {Header} from './Header';

export const DisplayMovies = ({type}) => {

    const [movies, setMovies] = useState(""); 
    const [header, setHeader] = useState("");
    const [pageNumber, setPageNumber] = useState(1)

    const getMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=a64879763b86ab20c959a57ad7c5d005&language=en-US&page=${pageNumber}&adult=false`)
        .then(res => res.json())
        .then((data) => {
            if(!data.errors){
                setMovies(data.results);
                console.log(data.results)
            } else {
                setMovies([]); 
            }
        });
    }; 
    
    const getHeader = (header) => {
        switch (type){
            case "now_playing":
                setHeader("Now Playing")
                break;
            case "top_rated":
                setHeader("Top Rated Movies")
                break;
            case "trending/all/day":
                setHeader("Popular Movies")
            case "upcoming":
                setHeader("Upcoming Movies")
        }
    }
    // const getPageNumber = (num) =>{
    //     setPageNumber(num);
    //     getMovies();
    // }
    useEffect(() => {
        getMovies();
        getHeader(type); 
        // getPageNumber(pageNumber);
    }, []); 

    return (
        <div>  
            <Header />
            <div className="add-page" onLoad={getMovies}>
                <h4 className="top-rated-movies type">{header}</h4>
            </div>
{/* 
            <div className="prev-next-btn">
                <button>1</button> 
                <button>2</button> 
                <button>3</button> 
                <button>4</button> 
            </div>  */}
        
            {movies.length > 0 && (
                <ul className="results">
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <ResultCard movie={movie}/> 
                        </li>
                    )) }
                </ul>
            )} <br /><br /><br /><br />


            <Footer />
    </div>
    );
};
