import React from 'react';
import {Header} from "./Header";
import { DisplayMovies } from "./DisplayMovies";

import "./Browse.css"

const Browse = () => {
    return(
        <div>
            <Header />
            <div className="big-trailer-screen">
            <iframe width="100%" height="450" 
                src="https://www.youtube.com/embed/6ZfuNTqbHE8?si=LYx-IEZLGwrEuB1y&autoplay=1&modestbranding=1&rel=0&loop=1&playlist=6ZfuNTqbHE8" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>

            </div>
            <div style={{marginTop: '20px'}}>
                <DisplayMovies type='trending/all/day' limit={20} showPrevNextBtn={false}/>
                <DisplayMovies type='top_rated' limit={20} showPrevNextBtn={false}/>
                <DisplayMovies type='now_playing' limit={20} showPrevNextBtn={false}/>
                <DisplayMovies type='upcoming' limit={20} showPrevNextBtn={false}/>
            </div>
        </div>
    )
};

export default Browse;
