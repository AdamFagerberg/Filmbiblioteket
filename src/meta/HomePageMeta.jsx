import { Helmet } from "react-helmet-async";

const HomePageMeta = () => (
  <Helmet>
    <title>Fimlbiblioteket</title>
    <meta
      name="description"
      content="Explore what movies are trending and add them to your watchlist"
    />
    <meta
      name="keywords"
      content="movies, trending movies, popular movies, watchlist, movie library"
    />
    <meta property="og:title" content="Filmbiblioteket" />
    <meta property="og:description" content="Look up and favourite movies" />
    <meta property="og:url" content={window.location.href} />
    <meta property="og:type" content="website" />
  </Helmet>
);

export default HomePageMeta;
