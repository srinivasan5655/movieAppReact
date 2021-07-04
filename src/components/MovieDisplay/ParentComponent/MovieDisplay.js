import React, { useEffect, useRef, useState } from "react";
import "./moviedisplay.css";
import { useDispatch, useSelector } from "react-redux";
import { togleSidebar } from "../../../action";

const MovieDisplay = (props) => {
  const dispatch = useDispatch();
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [title, setTitle] = useState(props.TitleData.title);
  const initial = useSelector((state) => state.getInitialState.title);
  const [trendOrSearch, setTrendOrSearch] = useState(initial);
  const menuIcon = useRef();

  useEffect(() => {
    if (initial === props.TitleData.title) {
      setTrendOrSearch("trend");
      setTitle(props.TitleData.title);
      setCurrentPage(1);
    }
  }, [initial, props.TitleData.title]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  const { dispatchAction, dispatchSearch } = props;
  useEffect(() => {
    if (trendOrSearch === "search" && debouncedSearch.length > 0) {
      dispatch(dispatchSearch(currentPage, debouncedSearch));
      setTitle(`Search results for ${debouncedSearch}`);
    } else {
      dispatch(dispatchAction(currentPage));
    }
  }, [
    dispatch,
    currentPage,
    trendOrSearch,
    debouncedSearch,
    dispatchAction,
    dispatchSearch,
  ]);

  const data = useSelector((state) => state.movieData);

  const previousPageEl = (page) => {
    if (page > 1) {
      return (
        <p
          className="back"
          onClick={(e) => calcCurrentPage(e, data, setCurrentPage, currentPage)}
        >
          {"<"} Page {currentPage - 1}
        </p>
      );
    } else {
      return <p></p>;
    }
  };

  const calcCurrentPage = (e, data, setCurrentPage, currentPage) => {
    if (e.target.classList.contains("forward")) {
      if (currentPage >= data.total_pages) return;
      setCurrentPage(currentPage + 1);
    } else if (e.target.classList.contains("back")) {
      setCurrentPage(currentPage - 1);
    }
    document.documentElement.scrollTop = 0;
  };

  const test = (e) => {
    if (e.target.classList.contains("hamburger")) {
      dispatch(togleSidebar());
      console.log(e.target.classList.contains("hamburger"));
    }
  };

  return (
    <div className="moviedisplay">
      <div className="header">
        <img
          onClick={(e) => test(e)}
          ref={menuIcon}
          alt="menu icon"
          className="hamburger"
          src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png"
        />
        <h2 className="title">{title}</h2>
        <div className="search-box">
          <input
            className="search-txt"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
              setTrendOrSearch("search");
            }}
            value={search}
            placeholder="Type to search"
          ></input>

          <i className="fas fa-search search-btn"></i>
        </div>
      </div>

      <div className="moviecontainer">
        {data.results?.map((value) => {
          if (value.poster_path === null) return <></>;
          return (
            <div className="movie" key={value.id}>
              <div className="imagecontainer">
                <img
                  src={`${baseImageUrl}${value.poster_path}`}
                  alt={value.title}
                />
                <div className="overview">
                  <h3>Overview</h3>
                  {value.overview}
                </div>
              </div>
              <div className="moviedetail">
                <h4>{value.name ? value.name : value.title}</h4>
                <p>{value.vote_average}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pagination">
        {previousPageEl(currentPage)}
        <p
          className={
            data.total_pages === currentPage ? "forward nodrop" : "forward"
          }
          onClick={(e) => calcCurrentPage(e, data, setCurrentPage, currentPage)}
        >
          {data.total_pages === currentPage
            ? "End"
            : `Page ${currentPage + 1} >`}
        </p>
      </div>
    </div>
  );
};

export default MovieDisplay;
