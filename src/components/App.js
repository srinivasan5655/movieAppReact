import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import TrendingMovie from "./MovieDisplay/TrendingMovie";
import Upcomming from "./MovieDisplay/Upcomming";
import Popular from "./MovieDisplay/Popular";
import NowPlaying from "./MovieDisplay/NowPlaying";
import TrendingShow from "./MovieDisplay/TrendingShow";
import TopRatedShows from "./MovieDisplay/TopRatedShows";

import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className={"appcontainer"}>
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={TrendingMovie} />
          <Route path="/popular" exact component={Popular} />
          <Route path="/upcomming" exact component={Upcomming} />
          <Route path="/nowplaying" exact component={NowPlaying} />
          <Route path="/trendingshow" exact component={TrendingShow} />
          <Route path="/topratedshows" exact component={TopRatedShows} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
