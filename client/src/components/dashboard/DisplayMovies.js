import React, { useState, useEffect, useRef } from 'react';
import { ResultCard } from './ResultCard';
import { Footer } from './footer';

export const DisplayMovies = ({ type, limit = 50, title, showPrevNextBtn=true }) => {
  const [movies, setMovies] = useState([]);
  const [header, setHeader] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  
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
      {showPrevNextBtn && 
        <div className="prev-next-btns">
            <button className="prev-next-btn" onClick={() => setPageNumber(pageNumber - 1)}>PREV</button>
            <button className="prev-next-btn" onClick={() => setPageNumber(1)}>1</button>
            <button className="prev-next-btn" onClick={() => setPageNumber(2)}>2</button>
            <button className="prev-next-btn" onClick={() => setPageNumber(3)}>3</button>
            <button className="prev-next-btn" onClick={() => setPageNumber(4)}>4</button>
            <button className="prev-next-btn" onClick={() => setPageNumber(pageNumber + 1)}>NEXT</button>
        </div>
      }
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