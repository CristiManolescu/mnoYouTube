import React, { useEffect, useState } from "react";
import SearchVideo from "./SearchVideo";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { YOUTUBE_SEARCH_VIDEO } from "../utils/constants";
import { Link } from "react-router-dom";

const SearchVideoContainer = () => {
  const searchTerm = useSelector((store) => store.term.searchTerm);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_VIDEO + searchTerm);
    const json = await data.json();
    setResults(json.items);
  };

  return (
    <div>
      {results.map((r) => (
        <Link key={r.id.videoId} to={"/watch?v=" + r.id.videoId}>
          <SearchVideo data={r} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVideoContainer;
