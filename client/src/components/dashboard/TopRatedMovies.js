import React from 'react';

import { DisplayMovies } from './DisplayMovies';
 
export const TopRatedMovies = (num) => {
    return(
        <div>
          <DisplayMovies type='top_rated' />
        </div> 
    )
};
