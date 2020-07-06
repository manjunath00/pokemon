import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function SearchSuggestions({
  searchSuggestions, 
  setShowSearchResults,
}) { 
  const search = useRef(3);
  useEffect(() => {
    document.addEventListener("click", searchView); 

    return function cleanUp() {
      document.removeEventListener("click", searchView);
    };
  }, []);

  const searchView = (e) => {
    if (!search.current.contains(e.target)) {
      closeSuggestions();
    }
  };

  const closeSuggestions = () => {
    setShowSearchResults(false);
  };

  return (
    <ul
      className='search--suggestions'
      ref={search} >
      {searchSuggestions.length > 0
        ? searchSuggestions.map((item) => (
            <li key={item.pokemonName}>
              <Link
                to={`/pokemon/${item._id}`}
                onClick={() => closeSuggestions()}>
                {item.pokemonName}
              </Link>
            </li>
          ))
        : null}
    </ul>
  );
}

export default SearchSuggestions;
