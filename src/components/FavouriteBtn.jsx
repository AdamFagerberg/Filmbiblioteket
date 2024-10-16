import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../redux/slices/favouritesSlice";
import HeartIcon from "../assets/heart.svg?react";

const FavouriteBtn = (movie) => {
  const dispatch = useDispatch();
  const movieData = movie.movie;

  const favourites = useSelector((state) => state.favourites);

  const isFavourite =
    favourites.length > 0
      ? favourites.some((favourite) => favourite?.id === movieData?.id)
      : false;

  const toggleButton = (e) => {
    e.stopPropagation();
    dispatch(toggleFavourite(movieData));
  };

  return (
    <button onClick={(e) => toggleButton(e)}>
      {isFavourite ? (
        <HeartIcon width={32} height={32} fill="red" stroke="white" />
      ) : (
        <HeartIcon width={32} height={32} stroke="white" fill="transparent" />
      )}
    </button>
  );
};

export default FavouriteBtn;
