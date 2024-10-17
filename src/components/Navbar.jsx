import { Link, useLocation } from "react-router-dom";
import Searchbar from "./Searchbar";
import HomeIcon from "../assets/home.svg?react";
import HeartIcon from "../assets/heart.svg?react";

const Navbar = () => {
  const currentPage = useLocation().pathname;

  return (
    <div className="flex justify-between p-4 md:mx-20 md:gap-10">
      <Link to="/" className="rounded-md md:px-4 md:py-1 hover:bg-neutral-800">
        {currentPage === "/" ? (
          <HomeIcon stroke="white" fill="white" height={40} width={40} />
        ) : (
          <HomeIcon stroke="white" fill="transparent" height={40} width={40} />
        )}
      </Link>
      <Searchbar />
      <Link
        to="/favourites"
        className="rounded-md md:px-4 md:py-1 hover:bg-neutral-800"
      >
        {currentPage === "/favourites" ? (
          <HeartIcon stroke="white" fill="white" height={40} width={40} />
        ) : (
          <HeartIcon stroke="white" fill="transparent" height={40} width={40} />
        )}
      </Link>
    </div>
  );
};

export default Navbar;
