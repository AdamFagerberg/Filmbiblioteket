import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <div className="justify-between flex">
      <Link to="/">HOME</Link>
      <Searchbar />
      <Link to="/favourites">FAVOURITES</Link>
    </div>
  );
};

export default Navbar;
