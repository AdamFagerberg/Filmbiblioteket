import { useDispatch } from "react-redux";
import { fetchSearch } from "../redux/slices/fetchSearchSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Searchbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query && /\S/.test(query)) {
      navigate(`/search/${query}`);
    } else {
      navigate("/");
    }
  }, [query, navigate]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    dispatch(fetchSearch(e.target.value));
  };

  return (
    <input
      className="text-black rounded-md px-4 hover:bg-gray-200"
      placeholder="Search"
      type="text"
      onChange={(e) => handleSearch(e)}
    />
  );
};

export default Searchbar;
