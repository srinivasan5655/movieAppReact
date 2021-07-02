import React from "react";
import MovieDisplay from "./MovieDisplay";
import { fetchTopRatedShow } from "../../action";
import { BottomSidebarData } from "../Sidebar/SidebarData";
import { fetchSearchTv } from "../../action";

const TopRatedShows = () => {
  return (
    <MovieDisplay
      TitleData={BottomSidebarData[1]}
      dispatchAction={fetchTopRatedShow}
      dispatchSearch={fetchSearchTv}
    />
  );
};

export default TopRatedShows;
