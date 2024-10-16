import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "./redux/slices/fetchMoviesSlice";
import { router } from "./router/router";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
