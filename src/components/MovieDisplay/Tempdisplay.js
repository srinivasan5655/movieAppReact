import React, { useEffect, useState } from "react";
import "./moviedisplay.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrending, fetchSearch } from "../../action";
import { TopSidebarData } from "../Sidebar/SidebarData";

const MovieDisplay = () => {
  const dispatch = useDispatch();
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [title, setTitle] = useState(TopSidebarData[0].title);
  const initial = useSelector((state) => state.getInitialState.title);
  const [trendOrSearch, setTrendOrSearch] = useState(initial);

  useEffect(() => {
    if (initial === TopSidebarData[0].title) {
      setTrendOrSearch("trend");
      setTitle(TopSidebarData[0].title);
      setCurrentPage(1);
    }
  }, [initial]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [search]);

  useEffect(() => {
    if (trendOrSearch === "search") {
      dispatch(fetchSearch(currentPage, debouncedSearch));
      setTitle(`Search results for ${debouncedSearch}`);
    } else {
      dispatch(fetchTrending(currentPage));
    }
  }, [currentPage, trendOrSearch, debouncedSearch]);

  const data = useSelector((state) => state.movieData);
  console.log(data);

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

  return (
    <div className="moviedisplay">
      <div className="header">
        <h2 className="title">{title}</h2>
        <div className="search-box">
          <input
            className="search-txt"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
              console.log("change");
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
          if (value.poster_path === null) return;
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
                <h4>{value.title}</h4>
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
