import { IMovie } from "./movie";

export interface SuccessfulMoviesResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export type ExternalId = string | null;

export interface SuccessfulExternalIdsResponse {
  id: number;
  imdb_id: ExternalId;
  wikidata_id: ExternalId;
  facebook_id: ExternalId;
  instagram_id: ExternalId;
  twitter_id: ExternalId;
}

export interface SuccessfulGetMovieResponse {
  movie_results: IMovie[];
  person_results: unknown[];
  tv_results: IMovie[];
  tv_episode_results: unknown[];
  tv_season_results: unknown[];
}
