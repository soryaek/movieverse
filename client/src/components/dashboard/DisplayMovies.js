import React, { useState, useEffect, useRef } from 'react';
import { ResultCard } from './ResultCard';
import { Footer } from './footer';

export const DisplayMovies = ({ type, limit = 50, title }) => {
  const [movies, setMovies] = useState([]);
  const [header, setHeader] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  
  // Unique refs for each scroller
  const scrollerRef = useRef(null); 
  
  let path = '';

  if (type === 'now_playing' || type === 'top_rated' || type === 'upcoming') {
    path = `movie/${type}`;
  }
  if (type === 'trending/all/day') {
    path = `${type}`;
  }
  if (type === 'AZ') {
    path = 'movie/now_playing';
  }

  const getMovies = (pageNumber) => {
    fetch(
      `https://api.themoviedb.org/3/${path}?api_key=a64879763b86ab20c959a57ad7c5d005&language=en-US&page=${pageNumber}&adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setMovies(data.results);
        } else {
          setMovies([]);
        }
      });
  };

  const getHeader = () => {
    switch (type) {
      case 'now_playing':
        setHeader('Now Playing');
        break;
      case 'top_rated':
        setHeader('Top Rated Movies');
        break;
      case 'trending/all/day':
        setHeader('Popular Movies');
        break;
      case 'upcoming':
        setHeader('Upcoming Movies');
        break;
      case 'AZ':
        setHeader('');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    getMovies(pageNumber);
    getHeader(type);
  }, [pageNumber, type]);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const hasLimit = limit !== 50;

  return (
    <div>
      <div className="add-page">
        <h4 className="top-rated-movies type">{title || header}</h4>
      </div>
      <div className="prev-next-btns">
        <button className="prev-next-btn" onClick={() => setPageNumber(pageNumber - 1)}>PREV</button>
        <button className="prev-next-btn" onClick={() => setPageNumber(1)}>1</button>
        <button className="prev-next-btn" onClick={() => setPageNumber(2)}>2</button>
        <button className="prev-next-btn" onClick={() => setPageNumber(3)}>3</button>
        <button className="prev-next-btn" onClick={() => setPageNumber(4)}>4</button>
        <button className="prev-next-btn" onClick={() => setPageNumber(pageNumber + 1)}>NEXT</button>
      </div>
      <div className="scroller-container" style={{ position: 'relative' }}>
        <button className="scroll-btn left" onClick={() => scrollLeft(scrollerRef)}>
          &#8249;
        </button>

        {movies.length > 0 && (
          <ul className={hasLimit ? 'results scroller' : 'results'} ref={scrollerRef}>
            {movies
              .filter((_, index) => !hasLimit || index < limit)
              .map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
          </ul>
        )}

        <button className="scroll-btn right" onClick={() => scrollRight(scrollerRef)}>
          &#8250;
        </button>
      </div>
      <Footer />
    </div>
  );
};

// import React, {useState, useEffect} from 'react';
// import {ResultCard} from "./ResultCard";
// import {Footer} from './footer';
// import Slider from "react-slick";

// export const DisplayMovies = ({type, limit=50}) => {
//     const [movies, setMovies] = useState(""); 
//     const [header, setHeader] = useState("");
//     const [pageNumber, setPageNumber] = useState(1);
//     let path = '';

//     if (type === 'now_playing' || type === 'top_rated' ||  type === 'upcoming') {
//         path = `movie/${type}`
//     }
//     if (type === 'trending/all/day') {
//         path = `${type}`;
//     }
//     if (type === 'AZ') {
//         path = 'movie/now_playing'
//     } 
    
//     const getMovies = (pageNumber) => {
//         fetch(`https://api.themoviedb.org/3/${path}?api_key=a64879763b86ab20c959a57ad7c5d005&language=en-US&page=${pageNumber}&adult=false`)
//         .then(res => res.json())
//         .then((data) => {
//             if(!data.errors){
//                 setMovies(data.results);
//             } else {
//                 setMovies([]); 
//             }
//         });
//     }; 
    
//     const getHeader = (header) => {
//         switch (type) {
//             case "now_playing":
//                 setHeader("Now Playing")
//                 break;
//             case "top_rated":
//                 setHeader("Top Rated Movies")
//                 break;
//             case "trending/all/day":
//                 setHeader("Popular Movies")
//                 break;
//             case "upcoming":
//                 setHeader("Upcoming Movies")
//                 break;
//             case "AZ":
//                 setHeader("")
//                 break;
//             default:
//                 break;
//         }
//     }

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4, // Number of movies to show at once
//         slidesToScroll: 1, // Scroll one movie at a time
//         nextArrow: <div>Next</div>, // Customize arrow buttons
//         prevArrow: <div>Previous</div>,
//     };

//     useEffect(() => {
//         getMovies(pageNumber);
//         getHeader(type); 
//     }, []); 

//     const handleClick = (pageNum) => { 
//         if (pageNum !== pageNumber & pageNum >= 1) {
//             setPageNumber(pageNum); //set new page number into pageNumber
//             getMovies(pageNum);
//             getHeader(type); 
//         }
//     }
   
//     const hasLimit = limit !== 50 ? true : false;

//     const scrollLeft = () => {
//         document.querySelector('.results').scrollBy({ left: -300, behavior: 'smooth' });
//     };
    
//     const scrollRight = () => {
//          document.querySelector('.results').scrollBy({ left: 300, behavior: 'smooth' });
//     };

//     return (
//         <div>
//             {/* {type !== 'AZ' ? <Header /> : null} */}
//             <div className="add-page" onLoad={getMovies}>
//                 <h4 className="top-rated-movies type">{header}</h4>
//             </div>
//             <div className="prev-next-btns">
//                 <button className="prev-next-btn" onClick={() => handleClick(pageNumber-1)}>PREV</button> 
//                 <button className="prev-next-btn" onClick={() => handleClick(1)}>1</button> 
//                 <button className="prev-next-btn" onClick={() => handleClick(2)}>2</button> 
//                 <button className="prev-next-btn" onClick={() => handleClick(3)}>3</button> 
//                 <button className="prev-next-btn" onClick={() => handleClick(4)}>4</button> 
//                 <button className="prev-next-btn" onClick={() => handleClick(pageNumber+1)}>NEXT</button> 
//             </div> 
//             {movies.length > 0 && (
//                 <ul className={hasLimit ? "results scroller": "results"}>
//                     {movies
//                         .filter((_, index) => !hasLimit || index < limit)
//                         .map((movie) => (
//                             <li key={movie.id}>
//                                 <ResultCard movie={movie} />
//                             </li>
//                         ))
//                     }
//                 </ul>
//             )}
//             <Footer />
//     </div>
//     );
// };
