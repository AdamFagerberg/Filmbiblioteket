import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../redux/slices/favouritesSlice";
import HeartIcon from "../assets/heart.svg?react";

const FavouriteBtn = ({ movie, size }) => {
  const dispatch = useDispatch();
  const movieData = movie;

  const favourites = useSelector((state) => state.favourites);

  const isFavourite =
    favourites.length > 0
      ? favourites.some((favourite) => favourite?.id === movieData?.id)
      : false;

  const toggleButton = (e) => {
    e.stopPropagation();
    dispatch(toggleFavourite(movieData));

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "favourite_movie",
      movie_id: movieData.id,
      movie_title: movieData.title,
      favourite_status: !isFavourite ? "added" : "removed",
    });
  };

  const sizeProps =
    size === "lg" ? { width: 80, height: 80 } : { width: 32, height: 32 };

  return (
    <button onClick={(e) => toggleButton(e)}>
      <HeartIcon
        stroke="white"
        fill={isFavourite ? "red" : "transparent"}
        {...sizeProps}
      />
    </button>
  );
};

export default FavouriteBtn;
