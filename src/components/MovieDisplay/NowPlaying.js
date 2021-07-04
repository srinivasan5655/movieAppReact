import React from "react";
import MovieDisplay from "./ParentComponent/MovieDisplay";
import { fetchNowplaying } from "../../action";
import { TopSidebarData } from "../Sidebar/SidebarData";
import { fetchSearch } from "../../action";

const NowPlaying = () => {
  return (
    <MovieDisplay
      TitleData={TopSidebarData[3]}
      dispatchAction={fetchNowplaying}
      dispatchSearch={fetchSearch}
    />
  );
};

export default NowPlaying;
