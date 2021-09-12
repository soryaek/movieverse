import React, {useState} from 'react';
import { Footer } from './footer';
import {ResultCard} from "./ResultCard";
import {Header} from './Header'

export const SearchAdd = () => {
    const [query,setQuery] = useState("");
    const [results, setResults] = useState(""); 

    const onChange = (event) => {
        setQuery(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=a64879763b86ab20c959a57ad7c5d005&language=en-US&page=1&include_adult=false&query=${query}`)
        .then(res => res.json())
        .then((data) => {
            if(!data.errors){ 
                setResults(data.results);
            } else {
                setResults([]);
            }
        });
       
    }; 
    return (
        <div>  
            <Header />
            <form onSubmit={onSubmit}>
            <div className="add-page">
                <div className="container">
                    <div className="add-content">
                        <div className="input-wrapper">
                            <input type="text"
                            placeholder="Search for a movie" 
                            value={query}
                            onChange={onChange}
                            />
                            <button className="search-btn" type="submit">SEARCH</button>
                        </div>
                    </div>
                </div>
                {results.length > 0 && 
                (
                    <ul className="results">
                        {results.map(movie => (
                            <li key={movie.id}>
                                <ResultCard movie={movie}/> 
                            </li>
                        )) }
                    </ul>
                )} : (
                <h4 className="txt-center"> </h4>
                )
                
            </div>
        </form>
        <Footer />
    </div>
    );
};
