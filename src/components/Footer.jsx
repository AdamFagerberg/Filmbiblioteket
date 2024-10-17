import DbLogo from "../assets/movieDbLogo.svg?react";

const Footer = () => {
  return (
    <div className="flex gap-10 justify-center align-middle px-8">
      <DbLogo width={50} height={50} />
      <p className="flex items-center">
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </div>
  );
};

export default Footer;
