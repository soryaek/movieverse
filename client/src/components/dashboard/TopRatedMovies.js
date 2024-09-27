import React from 'react';
import { DisplayMovies } from './DisplayMovies';
import { Header } from './Header';
 
export const TopRatedMovies = (num) => {
    return(
        <div>
          <Header />
          <DisplayMovies type='top_rated' />
        </div> 
    )
};
