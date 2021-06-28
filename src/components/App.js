import React from "react";

import Sidebar from "./Sidebar/Sidebar";
import MovieDisplay from "./MovieDisplay/MovieDisplay";
import "./app.css";

const App = () => {
  return (
    <div className={"appcontainer"}>
      <Sidebar />
      <MovieDisplay />
    </div>
  );
};

export default App;
