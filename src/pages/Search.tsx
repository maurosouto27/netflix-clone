import { MoviesContext } from "../contexts/MoviesContext";
import { useSearchParams } from "react-router-dom";
import Posters from "../components/Posters";
import Title from "../components/Title";
import { useContext } from "react";
import PosterSkeletons from "../components/PosterSkeletons";

const Search = () => {
  const { movies, isSearchLoading } = useContext(MoviesContext);
  const [searchParams] = useSearchParams();

  return (
    <main>
      <Title title={`Results for: ${searchParams.get("q") || ""}`} />
      {isSearchLoading ? <PosterSkeletons /> : <Posters movies={movies} />}
    </main>
  );
};

export default Search;
