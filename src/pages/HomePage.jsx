import { useSelector } from "react-redux";
import PosterCard from "../components/PosterCard";
import PosterContainer from "../components/ui/PosterContainer";
import HomePageMeta from "../meta/HomePageMeta";

const HomePage = () => {
  const { movies, status } = useSelector((state) => state.movies);

  if (status === "loading" || status === "initial" || status === "failed")
    return <div>Loading...</div>;

  return (
    <div className="h-screen">
      <HomePageMeta />
      <h1 className="font-semibold text-4xl p-4">TRENDING</h1>
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
    </div>
  );
};

export default HomePage;
