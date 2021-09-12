import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Watchlist } from "./Watchlist";
import { Watched } from "./Watched";
import { SearchAdd } from "./SearchAdd";
import {PopularMovies} from "./PopularMovies";
import {Genre} from "./Genre";
import {Homepage} from "./Homepage";
import {UpcomingMovies} from "./UpcomingMovies";
import "./PrivateApp.css";
// import "./font-awesome/css/all.min.css";
import { TopRatedMovies } from "./TopRatedMovies";
import { NowPlaying } from "./NowPlaying";

export default function PrivateApp () {

  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/searchadd">
            <SearchAdd />
          </Route>
          <Route exact path="/watched">
            <Watched />
          </Route>
          <Route exact path="/watchlist">
            <Watchlist />  
          </Route>
          <Route exact path="/genre">
            <Genre />  
          </Route>
          <Route exact path="/popularmovies">
            <PopularMovies />
          </Route>
          <Route exact path="/upcomingmovies">
            <UpcomingMovies />
          </Route>
          <Route exact path="/topratedmovies">
            <TopRatedMovies />
          </Route>
          <Route exact path="/nowplaying">
            <NowPlaying />
          </Route>
        </Switch>
      </Router>

  );
}
