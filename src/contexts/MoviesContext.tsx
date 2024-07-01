/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { IMoviesContext } from "../@types/movie";

export const initialConfigValue = {
  backdrop_sizes: [],
  base_url: "",
  logo_sizes: [],
  poster_sizes: [],
  profile_sizes: [],
  secure_base_url: "",
  still_sizes: [],
};

export const MoviesContext = createContext<IMoviesContext>({
  isSearchLoading: false,
  isError: false,
  isLoading: true,
  popular: [],
  movies: [],
  upcoming: [],
  trendingMovies: [],
  trendingSeries: [],
  topRated: [],
  airingToday: [],
  setMovies: () => {},
  setError: () => {},
  setLoading: () => {},
  setSearchLoading: () => {},
  config: initialConfigValue,
});
