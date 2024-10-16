import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, MovieDetailsPage, FavouritesPage } from "./pages";
import Layout from "./pages/layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "./redux/slices/fetchMoviesSlice";
import { SearchPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "movie/:id",
        element: <MovieDetailsPage />,
      },
      {
        path: "favourites",
        element: <FavouritesPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
