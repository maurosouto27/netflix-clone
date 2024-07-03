import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Search from "../pages/Search";
import MovieDetails from "../pages/MovieDetails";

const AppRoutes = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search" element={<Search />} />
        <Route path="/details/:movieId" element={<MovieDetails />} />
      </Routes>
    </MainLayout>
  </Router>
);

export default AppRoutes;
