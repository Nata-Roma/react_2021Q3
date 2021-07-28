import React from 'react';
import searchImg from '../../assets/search.png';
import './search.css';

const Search = (props: { onSearch: (searchKey: string) => void }) => {
  return (
    <div className="search_container">
      <div
        className="search_icon"
        style={{ backgroundImage: `url(${searchImg})` }}
      />
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onInput={(e: React.FormEvent<HTMLInputElement>) =>
          props.onSearch(e.currentTarget.value)
        }
      />
    </div>
  );
};

export default Search;
