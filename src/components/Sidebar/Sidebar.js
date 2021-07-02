import React, { useEffect, useRef, useState } from "react";
import { TopSidebarData, BottomSidebarData } from "./SidebarData";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDefault, togleSidebar } from "../../action";
import { useHistory } from "react-router";

const Sidebar = () => {
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();
  const sidebar = useSelector((state) => state.sidebarState);
  // console.log(sidebar);
  const [sidebarState, setSidebarState] = useState(sidebar);
  const sidebarRef = useRef();

  useEffect(() => {
    setSidebarState(sidebar);
  }, [sidebar]);

  const onClick = (id, title, path) => {
    setActive(id);
    dispatch(setDefault(title));
    dispatch(togleSidebar());
    history.push(path);
    document.documentElement.scrollTop = 0;
  };

  const addClass = (id) => {
    if (active === id) {
      return "active ";
    }
  };

  const showSidebar = (sidebarState, sidebarRef) => {
    if (sidebarRef.current?.clientWidth >= 201) return;
    else if (sidebarState && sidebarRef.current) {
      sidebarRef.current.style.width = "200px";
      sidebarRef.current.style.visibility = "visible";
    } else if (!sidebarState && sidebarRef.current) {
      // if (sidebarRef.current.clientWidth >= 201) return;
      sidebarRef.current.style.width = "0px";
      sidebarRef.current.style.visibility = "hidden";
    }
  };
  showSidebar(sidebarState, sidebarRef);

  return (
    <div ref={sidebarRef} className="sidebar">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYYD-s_dBWWYsZiuA9Oc1HCWkOLN20cjNdw&usqp=CAU"
          alt="logo"
        ></img>
      </div>
      <div className="top">
        {TopSidebarData.map((value) => {
          return (
            <h2
              key={value.id}
              className={addClass(value.id)}
              onClick={() => onClick(value.id, value.title, value.path)}
            >
              <Link to={value.path}>{value.title}</Link>
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
              onClick={() => onClick(value.id, value.title, value.path)}
            >
              <Link to={value.path}>{value.title}</Link>
            </h2>
          );
        })}
      </div>
    </div>
  );
};
export default Sidebar;
