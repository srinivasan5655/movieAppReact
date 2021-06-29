import React, { useEffect, useState } from "react";
import "./moviedisplay.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrending, fetchSearch } from "../../action";

const MovieDisplay = () => {
  const dispatch = useDispatch();
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState("");

  useEffect(() => {
    // dispatch(fetchTrending(currentPage));
    dispatch(fetchSearch(1, "my hero"));
  }, [dispatch, currentPage]);

  // const data = useSelector((state) => state.movieData);
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
        <h2 className="title">Trending</h2>
        <div className="search-box">
          <input
            className="search-txt"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
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
