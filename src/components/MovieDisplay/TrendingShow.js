import React from "react";
import MovieDisplay from "./ParentComponent/MovieDisplay";
import { fetchTrendingShow } from "../../action";
import { BottomSidebarData } from "../Sidebar/SidebarData";
import { fetchSearchTv } from "../../action";

const TrendingShow = () => {
  return (
    <MovieDisplay
      TitleData={BottomSidebarData[0]}
      dispatchAction={fetchTrendingShow}
      dispatchSearch={fetchSearchTv}
    />
  );
};

export default TrendingShow;
