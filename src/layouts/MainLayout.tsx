import { ReactNode, useContext } from "react";
import Header from "../components/Header";
import { MoviesContext } from "../contexts/MoviesContext";
import ErrorMessage from "../components/ErrorMessage";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { isError } = useContext(MoviesContext);

  return (
    <div>
      <div className="px-3">
        <Header />
      </div>
      <div className="px-3">{isError ? <ErrorMessage /> : children}</div>
    </div>
  );
};

export default MainLayout;
