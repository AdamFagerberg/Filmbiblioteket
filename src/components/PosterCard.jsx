import { useNavigate } from "react-router-dom";
import FavouriteBtn from "./FavouriteBtn";

const PosterCard = ({ imgSrc, title, rating, date, id, movie }) => {
  const navigate = useNavigate();

  function handleRedirect(id) {
    navigate(`/movie/${id}`);
  }

  return (
    <div
      className="relative group cursor-pointer rounded-md p-2 text-white w-80"
      onClick={() => handleRedirect(id)}
    >
      <div className="absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 bottom-0 w-full bg-gradient-to-t from-black from-60% to-transparent rounded-md p-4">
        <FavouriteBtn movie={movie} />
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p>{date}</p>
        <p>{rating.toFixed(1)}</p>
      </div>
      {imgSrc ? (
        <img
          src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
          alt={title}
          className="rounded-md mb-4"
        />
      ) : (
        <div className="h-[460px] w-72 bg-gray-900 rounded-md mx-4"></div>
      )}
    </div>
  );
};

export default PosterCard;
