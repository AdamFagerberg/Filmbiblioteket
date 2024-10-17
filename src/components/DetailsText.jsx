import StarIcon from "../assets/star.svg?react";
import FavouriteBtn from "./FavouriteBtn";

const DetailsText = ({ movie }) => {
  return (
    <div className="flex flex-col justify-end z-10 gap-5">
      <div className="inline-flex items-end animate-fade-up">
        <StarIcon height={40} width={40} fill="white" />
        <p>{movie.vote_average.toFixed(1)} / 10</p>
      </div>

      <h1 className="font-semibold text-4xl animate-fade-up">
        {movie.title.toUpperCase()}
      </h1>
      <h2
        className="italic text-2xl text-gray-400 animate-fade-up"
        style={{ animationDelay: "100ms", opacity: 0 }}
      >
        {movie.tagline}
      </h2>

      <div
        className="flex flex-col gap-2 pr-4 animate-fade-up"
        style={{ animationDelay: "200ms", opacity: 0 }}
      >
        <p>{movie.overview}</p>
        <p className="text-gray-400">{movie.release_date}</p>
      </div>

      <div
        className="animate-fade-up"
        style={{ animationDelay: "250ms", opacity: 0 }}
      >
        <FavouriteBtn movie={movie} size={"lg"} />
      </div>
    </div>
  );
};

export default DetailsText;
