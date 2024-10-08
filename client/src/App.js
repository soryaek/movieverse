import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import {GlobalProvider} from './context/GlobalState'

import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";
import { TopRatedMovies } from "./components/dashboard/TopRatedMovies";
import { NowPlaying } from "./components/dashboard/NowPlaying";
import { PopularMovies } from "./components/dashboard/PopularMovies";
import { SearchAdd } from "./components/dashboard/SearchAdd";
import { Homepage } from "./components/dashboard/Homepage";
import { Genre  } from "./components/dashboard/Genre";
import { Watched} from "./components/dashboard/Watched";
import { Watchlist} from "./components/dashboard/Watchlist";
import { UpcomingMovies} from "./components/dashboard/UpcomingMovies";
import { DailyPick } from "./components/dashboard/DailyPick/DailyPick";
import { AZList } from "./components/dashboard/AZList/AZList";
import Logout  from "./components/dashboard/Logout";
import LogoScreen from "./components/dashboard/LogoScreen";
import Browse from "./components/dashboard/Browse";


//Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalProvider>
          <Router>
            <div className="App">
              <Navbar />
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
                <PrivateRoute exact path="/welcome" component={LogoScreen} />
                <PrivateRoute exact path="/browse" component={Browse} />
                <PrivateRoute exact path="/Genre" component={Genre} />
                <PrivateRoute exact path="/topratedmovies" component={TopRatedMovies} />
                <PrivateRoute exact path="/nowplaying" component={NowPlaying} />
                <PrivateRoute exact path="/popularmovies" component={PopularMovies} />
                <PrivateRoute exact path="/searchadd" component={SearchAdd} />
                <PrivateRoute exact path="/upcomingmovies" component={UpcomingMovies} />
                <PrivateRoute exact path="/watched" component={Watched} />
                <PrivateRoute exact path="/watchlist" component={Watchlist} /> 
                <PrivateRoute exact path="/daily-pick" component={DailyPick} />
                <PrivateRoute exact path="/az-list" component={AZList} />
                <PrivateRoute exact path="/logout" component={Logout} />

              </Switch>
            </div>
          </Router>
      </GlobalProvider>
   </Provider>
     
    );
  }
}
export default App;
