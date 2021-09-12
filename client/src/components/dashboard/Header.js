import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
    
          <div className="brand">
            <Link to="/"><img src="LoveMovie.png" /></Link>
          </div>
          <ul className="nav-links">
          <li class="nav-item">
            <Link to="/genre">Genre</Link>
          </li>
            <li>
              <Link to="/watchlist">Favorite</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/SearchAdd">
                <i class="fas fa-search"></i>
                Browse
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </header>
  );
};
