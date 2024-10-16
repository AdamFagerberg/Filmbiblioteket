import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../redux/slices/fetchMovieDetailsSlice";
import MovieCard from "../components/MovieCard";
import MovieDetailsMeta from "../meta/MovieDetailsMeta";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { movie, status } = useSelector((state) => state.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  if (status === "loading" || status === "initial")
    return <div>Loading...</div>;

  if (!movie) return <div>Movie not found</div>;

  return (
    <div>
      <MovieDetailsMeta movie={movie} />
      <h1>Movie with id: {id}</h1>
      <MovieCard
        imgSrc={movie.poster_path}
        title={movie.title}
        desc={movie.overview}
        date={movie.release_date}
        rating={movie.vote_average}
        id={movie.id}
        movie={movie}
      />
    </div>
  );
};

export default MovieDetailsPage;
