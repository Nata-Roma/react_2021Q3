import React from 'react';
import searchImg from '../../assets/search.png';
import './search.css';

export const Search = () => {
  return (
    <div className="search_container">
      <div
        className="search_icon"
        style={{ backgroundImage: `url(${searchImg})` }}
      ></div>
      <input className="search-input" type="text" placeholder="Search..." />
    </div>
  );
};

export default Search;
