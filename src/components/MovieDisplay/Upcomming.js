import React from "react";
import MovieDisplay from "./ParentComponent/MovieDisplay";
import { fetchUpcomming } from "../../action";
import { TopSidebarData } from "../Sidebar/SidebarData";
import { fetchSearch } from "../../action";

const Upcomming = () => {
  return (
    <MovieDisplay
      TitleData={TopSidebarData[2]}
      dispatchAction={fetchUpcomming}
      dispatchSearch={fetchSearch}
    />
  );
};

export default Upcomming;
