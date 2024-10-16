import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ACCESS_TOKEN = import.meta.env.VITE_API_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

export const fetchSearch = createAsyncThunk(
  "search/fetchSearch",
  async (query) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&region=en`,
      options
    );

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  }
);

const fetchSearchSlice = createSlice({
  name: "search",
  initialState: {
    movies: [],
    status: "initial",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default fetchSearchSlice.reducer;
