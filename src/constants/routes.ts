const API_ROUTES = {
  TRENDING_MOVIES: "/trending/movie/week",
  CONFIGURATION: "/configuration",
  TOP_RATED_SERIES: "/tv/top_rated",
  POPULAR_SERIES: "/tv/popular",
  AIRING_TODAY: "/tv/airing_today",
  UPCOMING_MOVIES: "/movie/upcoming",
  TRENDING_SERIES: "/trending/tv/week",
  SEARCH_MOVIES: "/search/movie",
  SEARCH_SERIES: "/search/tv",
  EXTERNAL_MOVIE_ID: (movieId: number) => `/movie/${movieId}/external_ids`,
  EXTERNAL_SERIES_ID: (seriesId: number) => `/tv/${seriesId}/external_ids`,
  GET_MOVIE: "/find",
};

export default API_ROUTES;
