import React from 'react';
import searchImg from '../../assets/search.png';
import { ISearch } from '../../utilities/interfaces';
import './search.css';

const Search = (props: ISearch): JSX.Element => {
  const { onSearch, value } = props;

  return (
    <div className="search_container">
      <div
        className="search_icon"
        style={{ backgroundImage: `url(${searchImg})` }}
        data-testid='searchIcon'
      />
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onInput={(e: React.FormEvent<HTMLInputElement>) =>
          onSearch(e.currentTarget.value)
        }
        value={value}
        data-testid='searchInput'
      />
    </div>
  );
};

export default Search;
