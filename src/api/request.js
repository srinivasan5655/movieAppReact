const API_KEY = "0cb651f0c49a57435656050403b138dc";

const request = {
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}&page=`,
  fetchSearch: `/search/movie?api_key=${API_KEY}`,
};

export default request;
