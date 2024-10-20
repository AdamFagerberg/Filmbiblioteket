import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../redux/slices/fetchMovieDetailsSlice";
import MovieDetailsMeta from "../meta/MovieDetailsMeta";
import DetailsPoster from "../components/DetailsPoster";
import DetailsText from "../components/DetailsText";
import FavouriteBtn from "../components/FavouriteBtn";
import StarIcon from "../assets/star.svg?react";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { movie, status } = useSelector((state) => state.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    console.log(movie);
  }, [dispatch, id]);

  if (status === "loading" || status === "initial")
    return <div>Loading...</div>;

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="flex flex-col h-screen overflow-scroll no-scrollbar">
      <MovieDetailsMeta movie={movie} />

      <div
        className="relative flex-1 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black from-50% to-transparent"></div>

        <div className="flex flex-col p-6 md:flex-row md:p-24 md:py-52 justify-center  gap-5">
          <div className="flex flex-col gap-5 animate-fade-up ">
            <DetailsPoster imgSrc={movie.poster_path} title={movie.title} />
          </div>

          <DetailsText movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
