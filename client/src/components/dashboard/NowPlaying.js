import React, {useState, useEffect} from 'react';
import { DisplayMovies } from './DisplayMovies';


export const NowPlaying = () => {
    return(
        <div>
          <DisplayMovies type='now_playing' />
        </div> 
    )
};
