import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from "../../context/GlobalState";

export const Header = () => {
  const { watchlist } = useContext(GlobalContext);
  const { watched } = useContext(GlobalContext);

  console.log(watchlist);

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand" style={{paddingTop:"50px;"}}>
            <Link to="/home"><img src="movieverse.png" /></Link>
          </div>
          <ul className="nav-links">
            <li class="nav-item">
              <Link to="/genre">Genre</Link>
            </li>
            {/* <li class="nav-item">
              <Link to="/people">People</Link>
            </li>
          */}
            <li>
              <Link to="/watchlist">Favorite 
              {/* {watchlist.length > 0 ? watchlist.length : null} */}
              </Link>
            </li>
            <li>
              <Link to="/watched">Watched 
              {/* {watched.length > 0 ? watched.length : null} */}
              </Link>
            </li>
            <li>
              <Link to="/daily-pick">Daily Pick</Link>
            </li>
            <li>
              <Link to="/az-list">A-Z List</Link>
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
