import { useLocation, useParams } from "react-router-dom";
import MovieNotFound from "../components/MovieNotFound";
import {
  getExternalMovieId,
  getExternalSeriesId,
  getMovieOrSeries,
} from "../services/movies";
import { useContext, useEffect, useState } from "react";
import { IMovie } from "../@types/movie";
import { MoviesContext } from "../contexts/MoviesContext";
import MovieInfo from "../components/MovieInfo";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

const MovieDetails = () => {
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  const { movieId = "" } = useParams<{ movieId: string }>();
  const location = useLocation();

  const {
    config: { secure_base_url, poster_sizes },
  } = useContext(MoviesContext);

  useEffect(() => {
    if (!movieId) {
      setError("A movie id must be provided");
      return;
    }

    if (isNaN(+movieId)) {
      setError("Invalid movie id");
      return;
    }

    const getMovieDetails = async () => {
      try {
        setLoading(true);
        const { isMovie } = location.state as { isMovie: boolean };
        console.log(isMovie);
        const cb = isMovie ? getExternalMovieId : getExternalSeriesId;
        const externalId = await cb(+movieId);
        if (externalId === null) {
          setError("Info not available");
          return;
        }
        const movie = await getMovieOrSeries(externalId, isMovie);
        setMovie(movie);
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          setError("Info Not found");
          return;
        }
        setError("Something went wrong, try again.");
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [location.state, movieId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-[calc(100vh-10rem)]">
        <FaSpinner className="animate-spin text-red-600 h-16 w-16" />;
      </div>
    );
  }

  if (!movieId || error || !movie) {
    return <MovieNotFound errorMessage={error} />;
  }

  console.log(movie);

  return (
    <main className="container mx-auto">
      <section className="flex flex-col lg:flex-row gap-10 mt-10 text-center lg:text-left">
        <img
          className="lg:max-w-xl w-full h-full object-cover rounded-md"
          src={secure_base_url + poster_sizes[4] + movie?.poster_path}
          alt={`Poster of ${movie.title || movie.name}`}
        />
        <MovieInfo movie={movie} />
      </section>
    </main>
  );
};

export default MovieDetails;
