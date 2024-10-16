import { Helmet } from "react-helmet-async";

const SearchPageMeta = ({ query }) => {
  return (
    <Helmet>
      <title>{`Search Results for ${query} | Filmbiblioteket`}</title>
      <meta name="description" content={`Search results for ${query}`} />
      <meta
        property="og:title"
        content={`Search Results for ${query} | Filmbiblioteket`}
      />
      <meta property="og:description" content={`Search results for ${query}`} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SearchPageMeta;
