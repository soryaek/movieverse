import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPowerOff } from '@fortawesome/free-solid-svg-icons'


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
              <Link to="/SearchAdd" className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </Link>
            </li>
            <li>
              <Link to="/logout" className="logout-btn">
                <FontAwesomeIcon icon={faPowerOff} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
