import { useSelector } from "react-redux";
import PosterCard from "../components/PosterCard";
import PosterContainer from "../components/ui/PosterContainer";
import FavouritesPageMeta from "../meta/FavouritesPageMeta";

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites || []);

  if (favourites === null) {
    return <div>No favourites</div>;
  }

  return (
    <div>
      <FavouritesPageMeta />
      <h1>YOUR FAVOURITES HERE</h1>
      <ul>
        <PosterContainer>
          {favourites.map((movie, index) => (
            <li
              key={movie.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 200}ms`, opacity: 0 }}
            >
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
