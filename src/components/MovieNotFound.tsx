import { FaRegSadCry } from "react-icons/fa";

interface Props {
  errorMessage: string;
}

const MovieNotFound = ({ errorMessage }: Props) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center text-white text-center text-xl md:text-4xl h-[calc(100vh-15rem)]">
      <p>{errorMessage}</p>
      <FaRegSadCry className="h-20 w-20" />
    </div>
  );
};

export default MovieNotFound;
