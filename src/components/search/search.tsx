import React from 'react';
import searchImg from '../../assets/search.png';
import './search.css';

const Search = (props: {
  onSearch: (searchKey: string) => void;
  value: string;
}): JSX.Element => {
  const { onSearch, value } = props;

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
          onSearch(e.currentTarget.value)
        }
        value={value}
      />
    </div>
  );
};

export default Search;
