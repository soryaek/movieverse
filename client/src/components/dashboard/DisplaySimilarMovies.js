import React, {useState} from 'react';
import { ResultCard } from '../dashboard/ResultCard';

import './css/DisplaySimilarMovies.css'

export const  DisplaySimilarMovies= ({movie, index}) => {
    const limit = 8;
    return (
        <div className="similar-movie">
            { index < limit ?  
                <div className="similar-movie-container">
                    <div style={{width:'25px'}}>
                        <ResultCard style={{margin:'10px'}} movie={movie} />
                    </div>
                </div>
            : 
            ''}
        </div>
    )
}