import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { MoviesContext } from "../contexts/MoviesContext";
import { searchMovies } from "../services/movies";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const { setMovies, setError, setSearchLoading } = useContext(MoviesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();
  const location = useLocation();

  const [searchQuery] = useDebounce(search, 600);

  useEffect(() => {
    if (location.pathname === "/" && searchParams.get("q")) {
      navigate(`/search${location.search}`, { replace: true });
    }

    if (location.pathname === "/search" && !searchParams.get("q")) {
      navigate("/");
    }

    if (!searchQuery) return;

    const debouncedSearch = async () => {
      try {
        const movies = await searchMovies(searchQuery);
        setMovies(movies);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setSearchLoading(false);
      }
    };

    debouncedSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]); // if we add the rest dependencies, the debounce function wont work correctly

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    setSearchLoading(!!value);

    if (!value) {
      searchParams.delete("q");
      setSearchParams(searchParams);
    } else {
      navigate("/search");
      setSearchParams({ q: value });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center text-white border border-white text-base sm:text-xl rounded-md p-0 sm:p-2"
    >
      <IoIosSearch className="hidden sm:block h-6 w-6" />
      <input
        placeholder="Search Movies..."
        className="bg-transparent indent-2 outline-none"
        onChange={handleChange}
        type="text"
        name="search"
        value={search}
      />
    </form>
  );
};

export default SearchBar;
