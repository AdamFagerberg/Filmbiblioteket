import { useSelector } from "react-redux";
import PosterCard from "../components/PosterCard";
import PosterContainer from "../components/ui/PosterContainer";
import SearchPageMeta from "../meta/SearchPageMeta";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { movies, status } = useSelector((state) => state.search);
  const params = useParams();
  const query = params.query;

  if (status === "loading" || status === "initial" || status === "failed")
    return <div>Loading...</div>;

  return (
    <div className="h-screen">
      <SearchPageMeta query={query} />
      <h1 className="font-semibold text-4xl p-4">SEARCH RESULTS</h1>
      <ul>
        <PosterContainer>
          {movies.results.map((movie, index) => (
            <li
              key={movie.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
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

export default SearchPage;
