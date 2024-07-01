import logo from "../assets/netflix-logo.png";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-nowrap justify-between items-center mt-3">
      <Link to={"/"}>
        <img className="h-10 sm:h-20" src={logo} alt="Logo" />
      </Link>
      <SearchBar />
    </header>
  );
};

export default Header;
