import React, { useState } from 'react';

import './SearchInput.scss';
import Search from 'assets/Search.svg';

const SearchInput = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = e => {
    setSearchText(e?.target?.value);
  };

  return (
    <>
      <img className="searchIcon" src={Search} alt="Search icon" />
      <input
        className="searchInput"
        type="text"
        placeholder="25 milyon'dan fazla ürün içerisinde ara"
        value={searchText}
        onChange={handleSearchChange}
      />
    </>
  );
};

export default SearchInput;
