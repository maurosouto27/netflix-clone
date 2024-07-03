import { IMovie } from "../@types/movie";
import {
  ExternalId,
  SuccessfulExternalIdsResponse,
  SuccessfulGetMovieResponse,
  SuccessfulMoviesResponse,
} from "../@types/responses";
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

export const searchSeries = async (query: string) => {
  const res = await axios.get<SuccessfulMoviesResponse>(
    API_ROUTES.SEARCH_SERIES,
    {
      params: {
        query,
      },
    }
  );
  return res.data.results;
};

export const getExternalMovieId = async (movieId: number) => {
  const res = await axios.get<SuccessfulExternalIdsResponse>(
    API_ROUTES.EXTERNAL_MOVIE_ID(movieId)
  );

  return res.data.imdb_id;
};

export const getExternalSeriesId = async (seriesId: number) => {
  const res = await axios.get<SuccessfulExternalIdsResponse>(
    API_ROUTES.EXTERNAL_SERIES_ID(seriesId)
  );

  return res.data.imdb_id;
};

export const getMovieOrSeries = async (
  externalId: ExternalId,
  isMovie: boolean
) => {
  const res = await axios.get<SuccessfulGetMovieResponse>(
    `${API_ROUTES.GET_MOVIE}/${externalId}`,
    {
      params: {
        external_source: "imdb_id",
      },
    }
  );

  const { movie_results, tv_results } = res.data;

  return isMovie ? movie_results[0] : tv_results[0];
};
