import React from "react";
import MovieDisplay from "./ParentComponent/MovieDisplay";
import { fetchPopular } from "../../action";
import { TopSidebarData } from "../Sidebar/SidebarData";
import { fetchSearch } from "../../action";

const Popular = () => {
  return (
    <MovieDisplay
      TitleData={TopSidebarData[1]}
      dispatchAction={fetchPopular}
      dispatchSearch={fetchSearch}
    />
  );
};

export default Popular;
