import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ACCESS_TOKEN = import.meta.env.VITE_API_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week",
    options
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
});

const fetchMoviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "initial",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchMoviesSlice.reducer;
