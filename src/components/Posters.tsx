import { IMovie } from "../@types/movie";
import Card from "./Card";
import NoResults from "./NoResults";

interface PosterProps {
  movies: IMovie[];
}

const Posters = ({ movies }: PosterProps) => {
  if (!movies.length) {
    return <NoResults />;
  }

  return (
    <section className="py-5 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-5 sm:gap-7">
      {movies.map(
        ({ id, poster_path, release_date, title, name, first_air_date }) => {
          return (
            <Card
              key={id}
              id={id}
              poster={poster_path}
              releaseYear={release_date || first_air_date || ""}
              title={title || name || ""}
              isMovie={!!title}
            />
          );
        }
      )}
    </section>
  );
};

export default Posters;
