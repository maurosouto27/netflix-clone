import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ButtonsProps {
  onClick?: () => void;
}

const LeftButton = ({ onClick }: ButtonsProps) => {
  return (
    <button
      className="absolute top-0 bottom-0 z-50 h-full w-24 bg-black/30 hover:bg-black/70 duration-300 flex justify-center items-center group "
      onClick={onClick}
    >
      <FaArrowLeft className="text-white font-bold h-6 w-6 group-hover:w-8 group-hover:h-8 duration-300" />
    </button>
  );
};

const RightButton = ({ onClick }: ButtonsProps) => {
  return (
    <button
      className="absolute top-0 bottom-0 z-50 h-full w-24 bg-black/30 hover:bg-black/70 right-0 flex justify-center items-center group "
      onClick={onClick}
    >
      <FaArrowRight className="text-white font-bold h-6 w-6 group-hover:w-8 group-hover:h-8 duration-300" />
    </button>
  );
};

export { LeftButton, RightButton };
