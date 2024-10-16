import { Helmet } from "react-helmet-async";

const FavouritesPageMeta = () => (
  <Helmet>
    <title>Favourites | Filmbiblioteket</title>
    <meta name="description" content="Your Favourite Movies" />
    <meta property="og:title" content="Your Favourites" />
    <meta
      property="og:description"
      content="Movies you have saved as your favourites"
    />
    <meta property="og:url" content={window.location.href} />
    <meta property="og:type" color="website" />
  </Helmet>
);

export default FavouritesPageMeta;
