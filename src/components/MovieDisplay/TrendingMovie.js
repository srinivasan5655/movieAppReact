import React from "react";
import MovieDisplay from "./MovieDisplay";
import { fetchTrending } from "../../action";
import { TopSidebarData } from "../Sidebar/SidebarData";
import { fetchSearch } from "../../action";

const TrendingMovie = () => {
  return (
    <MovieDisplay
      TitleData={TopSidebarData[0]}
      dispatchAction={fetchTrending}
      dispatchSearch={fetchSearch}
    />
  );
};

export default TrendingMovie;
