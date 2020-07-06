import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchSuggestions from "./SearchSuggestions";

function Header({
  searchSuggestions,
  searchPokemon,
  searchTerm,
  onSearchSubmitFunc,
  setSearchTerm,
  reload,
  onReload,
}) {
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onCharEnter = (e) => {
    // console.log(e.target.value);
    const char = e.target.value.trim();
    setSearchValue(char);
    setSearchTerm(char);
    searchPokemon(char);
    setShowSearchResults(true);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    searchPokemon();
    onSearchSubmitFunc(searchValue);
    setShowSearchResults(false);
    // console.log("submitting", searchTerm);
  };

  const onGoBack = () => {
    onReload(!reload);
  };

  return (
    <>
      <header className='header'>
        <Link to='/' className='header__logo' onClick={() => onGoBack()}>
          Pokedex
        </Link>
        <div className='search'>
          <form className='search-bar' onSubmit={onSearchSubmit}>
            <input
              type='text'
              className='search-bar--input'
              value={searchValue}
              onChange={(e) => onCharEnter(e)}
            />
            <button type='submit' className='search-bar--submit'>
              <i className='fa fa-search' aria-hidden='true'></i>
            </button>
          </form>
          {showSearchResults ? (
            <SearchSuggestions
              searchSuggestions={searchSuggestions}
              setShowSearchResults={setShowSearchResults}
            />
          ) : null}
        </div>
      </header>
      <div className='new-button'>
        <Link className='btn-add' to='/new'>
          +
        </Link>
      </div>
    </>
  );
}

export default Header;
