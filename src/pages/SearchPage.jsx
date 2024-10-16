import { useSelector } from "react-redux";
import PosterCard from "../components/PosterCard";
import PosterContainer from "../components/ui/PosterContainer";

const SearchPage = () => {
  const { movies, status } = useSelector((state) => state.search);

  if (status === "loading" || status === "initial" || status === "failed")
    return <div>Loading...</div>;

  return (
    <div>
      <h1>SEARCH PAGE</h1>
      <ul>
        <PosterContainer>
          {movies.results.map((movie) => (
            <li key={movie.id} className="animate-fade-up">
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

export default SearchPage;
