const API_KEY = "0cb651f0c49a57435656050403b138dc";

const request = {
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}&page=`,
  fetchSearch: `/search/movie?api_key=${API_KEY}`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=`,
  fetchUpcomming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=`,
  fetchNowplaying: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=`,
  fetchTrendingShow: `/trending/tv/week?api_key=${API_KEY}&page=`,
  fetchTopRatedShow: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=`,
  fetchSearchTv: `/search/tv?api_key=${API_KEY}`,
};

export default request;
