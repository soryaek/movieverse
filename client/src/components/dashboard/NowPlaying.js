import React from 'react';
import { DisplayMovies } from './DisplayMovies';

export const NowPlaying = () => {
    return(
        <div>
          <DisplayMovies type='now_playing' />
        </div> 
    )
};
