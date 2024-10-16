import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div className="flex gap-10 justify-center p-10">
      <Link to="/">HOME</Link>
      <Searchbar />
      <Link to="/favourites">FAVOURITES</Link>
    </div>
  );
};

export default Navbar;
