import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ACCESS_TOKEN = import.meta.env.VITE_API_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

export const fetchMovieDetails = createAsyncThunk(
  "movieDetails/fetchMovieDetails",
  async (movie_id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}`,
      options
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  }
);

const fetchMovieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movie: [],
    status: "initial",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movie = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchMovieDetailsSlice.reducer;
