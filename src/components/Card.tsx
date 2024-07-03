import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { POSTERS_SIZES } from "../constants";
import useDeviceWidth from "../hooks/useDeviceWidth";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  releaseYear: string;
  poster: string;
  id: number;
  isMovie: boolean;
}

const Card = ({ title, releaseYear, poster, id, isMovie }: CardProps) => {
  const {
    config: { secure_base_url },
  } = useContext(MoviesContext);

  const device = useDeviceWidth();

  const date = new Date(releaseYear);

  if (!poster) return null;

  return (
    <Link to={`/details/${id}`} state={{ isMovie }}>
      <div className="relative text-center group">
        <div className="flex justify-center">
          <img
            className="w-full h-full object-cover rounded sm:rounded-md"
            src={`${secure_base_url}${POSTERS_SIZES[device]}${poster}`}
            alt={`Poster from ${title}`}
          />
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-100 duration-300" /> */}
        <div className="text-white absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 duration-300 rounded sm:rounded-md bg-gradient-to-t from-black h-1/2 flex justify-center items-end">
          <ul className="flex flex-col gap-2 mb-3">
            <li className="font-semibold">{title}</li>
            {releaseYear && <li>{date.getFullYear()}</li>}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default Card;
