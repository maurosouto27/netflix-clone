import { ImagesConfig } from "./config";

export interface IMovie {
  backdrop_path: string;
  id: number;
  title?: string;
  name?: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  first_air_date?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMoviesContext {
  isSearchLoading: boolean;
  isLoading: boolean;
  isError: boolean;
  popular: IMovie[];
  trendingMovies: IMovie[];
  upcoming: IMovie[];
  airingToday: IMovie[];
  trendingSeries: IMovie[];
  topRated: IMovie[];
  movies: IMovie[];
  setMovies: React.Dispatch<React.SetStateAction<IMovie[]>> | (() => void);
  setError: React.Dispatch<React.SetStateAction<boolean>> | (() => void);
  setLoading: React.Dispatch<React.SetStateAction<boolean>> | (() => void);
  setSearchLoading:
    | React.Dispatch<React.SetStateAction<boolean>>
    | (() => void);
  config: ImagesConfig;
}
