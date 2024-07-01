import { IoReload } from "react-icons/io5";

const ErrorMessage = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center text-white text-center text-xl md:text-4xl h-[calc(100vh-15rem)]">
      <p>There was an error, try reloading the page</p>
      <button
        onClick={() => window.location.reload()}
        type="button"
        className="group border border-white py-3 px-5 font-medium flex justify-center items-center gap-3 rounded-lg "
      >
        <IoReload className="group-hover:animate-spin" />
        <span>Reload</span>
      </button>
    </div>
  );
};

export default ErrorMessage;
