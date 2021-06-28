import axios from "../api/axios";
import request from "../api/request";

export const fetchTrending =
  (page = 1) =>
  async (dispatch) => {
    const response = await axios.get(`${request.fetchTrending}${page}`);

    console.log(response);
    dispatch({ type: "FETCH_TRENDING", payload: response.data });
  };
