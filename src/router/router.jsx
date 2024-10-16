import { createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  MovieDetailsPage,
  FavouritesPage,
  SearchPage,
} from "../pages";
import Layout from "../pages/layout/Layout";

export const router = createBrowserRouter([
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
