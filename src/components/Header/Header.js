import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        Pokedex
      </Link>
      <form>
        <input type='text' className='search-bar' />
      </form>
    </header>
  );
}

export default Header;
