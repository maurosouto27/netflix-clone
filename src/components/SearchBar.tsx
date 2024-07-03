import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { MoviesContext } from "../contexts/MoviesContext";
import { searchMovies, searchSeries } from "../services/movies";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const { setMovies, setError, setSearchLoading } = useContext(MoviesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();

  const [searchQuery] = useDebounce(search, 600);

  useEffect(() => {
    if (!searchQuery) return;

    const debouncedSearch = async () => {
      try {
        const [movies, series] = await Promise.all([
          searchMovies(searchQuery),
          searchSeries(searchQuery),
        ]);
        setMovies([...movies, ...series]);
      } catch (e) {
        setError(true);
      } finally {
        setSearchLoading(false);
      }
    };

    debouncedSearch();
  }, [searchQuery, setError, setMovies, setSearchLoading]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    setSearchLoading(!!value);

    if (!value) {
      searchParams.delete("q");
      setSearchParams(searchParams);
      navigate("/");
    } else {
      setSearchParams({ q: value });
      navigate(`/search?q=${value}`, { replace: true });
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
