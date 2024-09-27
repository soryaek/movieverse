import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from "../../context/GlobalState";
import { padding } from "@mui/system";

export const Header = () => {
  const { watchlist } = useContext(GlobalContext);
  const { watched } = useContext(GlobalContext);

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand" style={{paddingTop:"50px;"}}>
            <Link to="/browse"><img src="movieverse.png" /></Link>
          </div>
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/genre">Genre</Link>
            </li>
            <li className="nav-item">
              <Link to="/watchlist">Favorite 
              {watchlist.length > 0 ? 
                <span style={{color:'red', paddingLeft:'2px', fontSize:'25px'}}>{watchlist.length}</span>              
              : null}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/watched">Watched 
              {watched.length > 0 ? 
                <span style={{color:'red', paddingLeft:'2px', fontSize:'25px'}}>{watched.length}</span>              
              : null}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/daily-pick">Daily Pick</Link>
            </li>
            <li className="nav-item">
              <Link to="/az-list">A-Z List</Link>
            </li>
            <li className="nav-item">
              <Link to="/SearchAdd" className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </Link>
            </li>
            <li className="nav-item">
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
