import { useNavigate } from "react-router-dom";
import FavouriteBtn from "./FavouriteBtn";

const MovieCard = ({ imgSrc, title, desc, date, rating, id, movie }) => {
  const navigate = useNavigate();

  function handleRedirect(id) {
    navigate(`/movie/${id}`);
  }

  return (
    <div
      className="cursor-pointer w-56 mb-2 rounded-md p-4 text-white bg-gray-950 hover:bg-gray-600"
      onClick={() => handleRedirect(id)}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
        alt={title}
        width={200}
        className="rounded-md mb-4 w-48 h-48"
      />
      <h2>{title}</h2>
      <p>{desc}</p>
      <p>{date}</p>
      <p>{rating}</p>
      <FavouriteBtn movie={movie} />
    </div>
  );
};

export default MovieCard;
