import { FaRegSadCry } from "react-icons/fa";

const NoResults = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center text-white text-center text-xl md:text-4xl h-[calc(100vh-15rem)]">
      <p>There are no results for you search</p>
      <FaRegSadCry className="h-20 w-20" />
    </div>
  );
};

export default NoResults;
