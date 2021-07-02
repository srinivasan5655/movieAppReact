import { combineReducers } from "redux";

const movieData = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_TRENDING":
      return { ...state, ...action.payload };
    case "FETCH_SEARCH":
      return { ...state, ...action.payload };
    case "FETCH_POPULAR":
      return { ...state, ...action.payload };
    case "FETCH_UPCOMMING":
      return { ...state, ...action.payload };
    case "FETCH_NOWPLAYING":
      return { ...state, ...action.payload };
    case "FETCH_TRENDING_SHOW":
      return { ...state, ...action.payload };
    case "FETCH_TOPRATED_SHOW":
      return { ...state, ...action.payload };
    case "FETCH_SEARCHTV":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const getInitialState = (state = { title: "trending" }, action) => {
  if ((action.type = "SET_DEFAULT")) {
    return { title: action.payload };
  } else {
    return state;
  }
};

const sidebarState = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  movieData,
  sidebarState,
  getInitialState,
});
