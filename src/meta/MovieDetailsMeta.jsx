// src/meta/MovieDetailsMeta.jsx
import { Helmet } from "react-helmet-async";

const MovieDetailsMeta = ({ movie }) => {
  const { title, overview, poster_path, id } = movie || {};

  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const pageUrl = window.location.href;

  return (
    <Helmet>
      <title>{`${title} | Filmbiblioteket`}</title>
      <meta name="description" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={overview} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={`${pageUrl}/${id}`} />
      <meta property="og:type" color="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={overview} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default MovieDetailsMeta;
