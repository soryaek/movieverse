import React, {useState, useEffect} from 'react'
import { DisplaySimilarMovies } from './DisplaySimilarMovies';

export const SimilarMovies = ({id}) =>{

    const [movies, setMovies] = useState(""); 

    const getMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=a64879763b86ab20c959a57ad7c5d005&language=en-US&page=1&adult=false`)
        .then(res => res.json())
        .then((data) => {
            if(!data.errors){
                setMovies(data.results);
            } else {
                setMovies([]); 
            }
        });
    }; 
  
    useEffect(() => {
        getMovies();

    }, []); 

    return (
        <div>  
        {movies.length > 0 && (
            <ul className="results">
                {movies.map((movie,i) => (
                   <DisplaySimilarMovies index={i} movie={movie}/>
                ))}
            </ul>
        )} <br/> <br/> <br/>

</div>
    )
}