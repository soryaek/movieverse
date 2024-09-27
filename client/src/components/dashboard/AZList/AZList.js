import React, { useState} from 'react'
import { Header } from '../Header'
import { Footer } from '../footer'
import { DisplayMovies } from '../DisplayMovies'
import { ResultCard } from '../ResultCard'

export const AZList = () => {
    const [movies, setMovies] = useState([]);

    const getMoviesByAlphabet = (pageNumber, letter) => {
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=a64879763b86ab20c959a57ad7c5d005&language=en-US&page=${pageNumber}&query=${letter}&adult=false`
        )
        .then((res) => res.json())
        .then((data) => {
        if (!data.errors) {
            const filteredMovies = data.results.filter((movie) =>
                movie.title.toUpperCase().startsWith(letter.toUpperCase())
            );
            setMovies(filteredMovies);
        } else {
            setMovies([]);
        }
        });
    };

    const displayMoviesByAlpha = (alpha) => {
        const randomNum = Math.ceil(Math.random() * 10);
        getMoviesByAlphabet(randomNum, alpha);
    }

    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    '0', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    return(
        <div>
            <Header />
            <div style={{textAlign:'center', marginBottom:'50px'}}>
                {alphabets.map(alphabet => (
                    <button style={{marginRight:'5px', padding:'10px'}} onClick={
                        () => displayMoviesByAlpha(alphabet)}>{alphabet}</button>
                ))}
            </div>
            {movies.length > 0 && (
            <ul className="results">
                {movies
                .map((movie) => (
                    <li key={movie.id}>
                    <ResultCard movie={movie} />
                    </li>
                ))}
            </ul>
            )}
            {movies.length === 0 && <DisplayMovies type="AZ" showPrevNextBtn={false} />}
            <Footer />
        </div>
    )
}