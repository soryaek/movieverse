import React from 'react';
import { DisplayMovies } from './DisplayMovies';
import { Header } from './Header';
// fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=a64879763b86ab20c959a57ad7c5d005&language=en-US&page=1&adult=false`)

export const UpcomingMovies = () => {
    return(
        <div>
          <Header />
          <DisplayMovies type='upcoming' />
        </div> 
    )
};
