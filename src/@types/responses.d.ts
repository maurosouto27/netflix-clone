import { IMovie } from "./movie";

export interface SuccessfulMoviesResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
