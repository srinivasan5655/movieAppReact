import React, { useState } from "react";
import { TopSidebarData, BottomSidebarData } from "./SidebarData";
import "./sidebar.css";

const Sidebar = () => {
  const [active, setActive] = useState(null);

  const onClick = (id) => {
    setActive(id);
  };

  const addClass = (id) => {
    if (active === id) {
      return "active disabled";
    }
  };

  return (
    <div className="sidebar">
      <div className="top">
        {TopSidebarData.map((value) => {
          return (
            <h2
              key={value.id}
              className={addClass(value.id)}
              onClick={() => onClick(value.id)}
            >
              <a href="#">{value.title}</a>
            </h2>
          );
        })}
      </div>
      <div className="bottom">
        {BottomSidebarData.map((value) => {
          return (
            <h2
              key={value.id}
              className={addClass(value.id)}
              onClick={() => onClick(value.id)}
            >
              <a href="#">{value.title}</a>
            </h2>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
