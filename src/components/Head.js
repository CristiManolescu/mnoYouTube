import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    //Debounce -> if you write faster than 200ms, then the API Call is canceled.
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/8182/8182885.png"
          alt="menu"
        />

        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">
            🔎
          </button>
        </div>
        <div className="fixed bg-white py-2 px-2 w-auto rounded-lg shadow-lg border border-gray-200">
          <ul>
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="py-2 px-3 shadow-sm hover:bg-gray-100"
              >
                🔎 {suggestion}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
