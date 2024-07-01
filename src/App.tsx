import MovieContextProvider from "./providers/MoviesProvider";
import AppRoutes from "./components/Routes";

function App() {
  return (
    <MovieContextProvider>
      <AppRoutes />
    </MovieContextProvider>
  );
}

export default App;
