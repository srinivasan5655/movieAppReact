import React, { useEffect, useState } from "react";
import "./moviedisplay.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrending } from "../../action";

const MovieDisplay = () => {
  const dispatch = useDispatch();
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchTrending(currentPage));
  }, [dispatch, currentPage]);

  const data = useSelector((state) => state.movieData);
  console.log(data);

  const setPageNo = (page) => {
    if (page > 1) {
      return (
        <p className="back" onClick={(e) => no(e, setCurrentPage, currentPage)}>
          {"<"} Page {currentPage - 1}
        </p>
      );
    } else {
      return <p></p>;
    }
  };

  const no = (e, setCurrentPage, page) => {
    if (e.target.classList.contains("forward")) {
      setCurrentPage(page + 1);
    } else if (e.target.classList.contains("back")) {
      setCurrentPage(page - 1);
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
            name=""
            placeholder="Type to search"
          ></input>
          <i class="fas fa-search search-btn"></i>
        </div>
      </div>

      <div className="moviecontainer">
        {data.results?.map((value) => {
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
        {setPageNo(currentPage)}
        <p
          className="forward"
          onClick={(e) => no(e, setCurrentPage, currentPage)}
        >
          Page {currentPage + 1} {">"}
        </p>
      </div>
    </div>
  );
};

export default MovieDisplay;
