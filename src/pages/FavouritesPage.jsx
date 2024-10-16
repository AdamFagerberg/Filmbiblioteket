import { useSelector } from "react-redux";
import PosterCard from "../components/PosterCard";
import PosterContainer from "../components/ui/PosterContainer";

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites || []);

  if (favourites === null) {
    return <div>No favourites</div>;
  }

  return (
    <div>
      <h1>YOUR FAVOURITES HERE</h1>
      <ul>
        <PosterContainer>
          {favourites.map((movie) => (
            <li key={movie.id}>
              <PosterCard
                imgSrc={movie.poster_path}
                title={movie.title}
                date={movie.release_date}
                rating={movie.vote_average}
                id={movie.id}
                movie={movie}
              />
            </li>
          ))}
        </PosterContainer>
      </ul>
    </div>
  );
};

export default FavouritesPage;
