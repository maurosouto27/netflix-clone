import { IMovie } from "../@types/movie";
import { SuccessfulMoviesResponse } from "../@types/responses";
import axios from "../axios.config";
import API_ROUTES from "../constants/routes";

export const getTrendingMovies = async (): Promise<IMovie[]> => {
  const res = await axios.get<SuccessfulMoviesResponse>(
    API_ROUTES.TRENDING_MOVIES
  );
  return res.data.results;
};

export const getTrendingSeries = async (): Promise<IMovie[]> => {
  const res = await axios.get<SuccessfulMoviesResponse>(
    API_ROUTES.TRENDING_SERIES
  );
  return res.data.results;
};

export const getTopRatedMovies = async (): Promise<IMovie[]> => {
  const res = await axios.get<SuccessfulMoviesResponse>(
    API_ROUTES.TOP_RATED_SERIES
  );
  return res.data.results;
};

export const getPopularMovies = async (): Promise<IMovie[]> => {
  const res = await axios.get<SuccessfulMoviesResponse>(
    API_ROUTES.POPULAR_SERIES
  );
  return res.data.results;
};

export const getAiringToday = async (): Promise<IMovie[]> => {
  const res = await axios.get<SuccessfulMoviesResponse>(
    API_ROUTES.AIRING_TODAY
  );
  return res.data.results;
};

export const getUpcomingMovies = async (): Promise<IMovie[]> => {
  const res = await axios.get<SuccessfulMoviesResponse>(
    API_ROUTES.UPCOMING_MOVIES
  );
  return res.data.results;
};

export const searchMovies = async (query: string) => {
  const res = await axios.get<SuccessfulMoviesResponse>(
    API_ROUTES.SEARCH_MOVIES,
    {
      params: {
        query,
      },
    }
  );
  return res.data.results;
};
