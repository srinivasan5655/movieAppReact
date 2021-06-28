import { combineReducers } from "redux";

const movieData = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_TRENDING":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  movieData,
});
