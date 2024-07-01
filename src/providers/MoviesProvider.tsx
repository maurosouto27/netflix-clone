import { ReactNode, useEffect, useState } from "react";
import { ImagesConfig } from "../@types/config";
import { IMovie } from "../@types/movie";
import {
  getAiringToday,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getTrendingSeries,
  getUpcomingMovies,
} from "../services/movies";
import { getApiConfig } from "../services/config";
import { MoviesContext, initialConfigValue } from "../contexts/MoviesContext";

interface Props {
  children: ReactNode;
}

const MoviesContextProvider = ({ children }: Props) => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isSearchLoading, setSearchLoading] = useState(false);
  const [config, setConfig] = useState<ImagesConfig>(initialConfigValue);
  const [movies, setMovies] = useState<IMovie[]>([]);

  const [airingToday, setAiringToday] = useState<IMovie[]>([]);

  const [upcoming, setUpcoming] = useState<IMovie[]>([]);

  const [topRated, setTopRated] = useState<IMovie[]>([]);

  const [trendingMovies, setTrendingMovies] = useState<IMovie[]>([]);
  const [trendingSeries, setTrendingSeries] = useState<IMovie[]>([]);

  const [popular, setPopular] = useState<IMovie[]>([]);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const [
          trendingSeries,
          trendingMovies,
          topRated,
          airingToday,
          upcoming,
          popular,
          config,
        ] = await Promise.all([
          getTrendingSeries(),
          getTrendingMovies(),
          getTopRatedMovies(),
          getAiringToday(),
          getUpcomingMovies(),
          getPopularMovies(),
          getApiConfig(),
        ]);

        setTrendingSeries(trendingSeries);
        setTrendingMovies(trendingMovies);
        setTopRated(topRated);
        setAiringToday(airingToday);
        setUpcoming(upcoming);
        setPopular(popular);
        setConfig(config);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        isSearchLoading,
        isError,
        isLoading,
        upcoming,
        airingToday,
        topRated,
        trendingMovies,
        trendingSeries,
        popular,
        movies,
        config,
        setMovies,
        setLoading,
        setError,
        setSearchLoading,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
