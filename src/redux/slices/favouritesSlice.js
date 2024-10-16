import { createSlice } from "@reduxjs/toolkit";

const defaultState = [];

const getLocalFavourites = () => {
  const favourites = localStorage.getItem("favourites");
  return favourites ? JSON.parse(favourites).filter(Boolean) : defaultState;
};

const saveLocalFavourites = (favourites) => {
  const data = favourites.length ? favourites.filter(Boolean) : defaultState;
  localStorage.setItem("favourites", JSON.stringify(data));
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: getLocalFavourites(),

  reducers: {
    toggleFavourite: (state, action) => {
      const movie = action.payload;

      const isFavourite = state.findIndex(
        (favourite) => favourite?.id === movie.id
      );

      if (isFavourite >= 0) {
        state.splice(isFavourite, 1);
      } else {
        state.push(movie);
      }

      saveLocalFavourites(state);
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
