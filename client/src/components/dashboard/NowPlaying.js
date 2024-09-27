import React from 'react';
import { DisplayMovies } from './DisplayMovies';
import { Header } from './Header';

export const NowPlaying = () => {
    return(
        <div>
          <Header />
          <DisplayMovies type='now_playing' />
        </div> 
    )
};
