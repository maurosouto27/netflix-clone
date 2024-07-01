import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import Carrusel from "../components/Carrusel";

const Home = () => {
  const {
    trendingMovies,
    trendingSeries,
    popular,
    topRated,
    airingToday,
    upcoming,
  } = useContext(MoviesContext);

  return (
    <main className="mb-10">
      <Carrusel sectionTitle="Upcoming Movies" movies={upcoming} />
      <Carrusel sectionTitle="Trending Movies" movies={trendingMovies} />
      <Carrusel sectionTitle="Trending Series" movies={trendingSeries} />
      <Carrusel sectionTitle="Popular Series" movies={popular} />
      <Carrusel sectionTitle="Top Rated Series" movies={topRated} />
      <Carrusel sectionTitle="Airing Today" movies={airingToday} />
    </main>
  );
};

export default Home;
