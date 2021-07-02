import axios from "../api/axios";
import request from "../api/request";

export const fetchTrending =
  (page = 1) =>
  async (dispatch) => {
    const response = await axios.get(`${request.fetchTrending}${page}`);

    dispatch({ type: "FETCH_TRENDING", payload: response.data });
  };

export const fetchPopular =
  (page = 1) =>
  async (dispatch) => {
    const response = await axios.get(`${request.fetchPopular}${page}`);

    dispatch({ type: "FETCH_POPULAR", payload: response.data });
  };

export const fetchUpcomming =
  (page = 1) =>
  async (dispatch) => {
    const response = await axios.get(`${request.fetchUpcomming}${page}`);

    dispatch({ type: "FETCH_UPCOMMING", payload: response.data });
  };

export const fetchNowplaying =
  (page = 1) =>
  async (dispatch) => {
    const response = await axios.get(`${request.fetchNowplaying}${page}`);

    dispatch({ type: "FETCH_NOWPLAYING", payload: response.data });
  };

export const fetchTrendingShow =
  (page = 1) =>
  async (dispatch) => {
    const response = await axios.get(`${request.fetchTrendingShow}${page}`);

    dispatch({ type: "FETCH_TRENDING_SHOW", payload: response.data });
  };

export const fetchTopRatedShow =
  (page = 1) =>
  async (dispatch) => {
    const response = await axios.get(`${request.fetchTopRatedShow}${page}`);

    dispatch({ type: "FETCH_TOPRATED_SHOW", payload: response.data });
  };

export const fetchSearch =
  (page = 1, query) =>
  async (dispatch) => {
    const response = await axios.get(
      `${request.fetchSearch}&query=${query}&page=${page}`
    );

    dispatch({ type: "FETCH_SEARCH", payload: response.data });
  };

export const fetchSearchTv =
  (page = 1, query) =>
  async (dispatch) => {
    const response = await axios.get(
      `${request.fetchSearchTv}&query=${query}&page=${page}`
    );

    dispatch({ type: "FETCH_SEARCHTV", payload: response.data });
  };

export const setDefault = (title) => {
  return {
    type: "SET_DEFAULT",
    payload: title,
  };
};

export const togleSidebar = () => {
  return {
    type: "TOGGLE_SIDEBAR",
  };
};
