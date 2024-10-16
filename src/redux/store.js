import { configureStore } from "@reduxjs/toolkit";
import fetchMoviesReducer from "./slices/fetchMoviesSlice";
import fetchMovieDetailsReducer from "./slices/fetchMovieDetailsSlice";
import favouritesReducer from "./slices/favouritesSlice";
import fetchSearchReducer from "./slices/fetchSearchSlice";

export const store = configureStore({
  reducer: {
    movies: fetchMoviesReducer,
    movieDetails: fetchMovieDetailsReducer,
    favourites: favouritesReducer,
    search: fetchSearchReducer,
  },
});
