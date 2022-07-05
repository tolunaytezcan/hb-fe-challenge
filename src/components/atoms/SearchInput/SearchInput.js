import React, { useEffect } from 'react';

import './SearchInput.scss';
import Search from 'assets/Search.svg';
import { useFilter } from 'hooks';

const SearchInput = ({ searchText, setSearchText }) => {
  const { setSelectedFilters } = useFilter();

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchText.length > 2) {
        setSelectedFilters(prev => ({ ...prev, search: searchText }));
      }
      if (searchText.length === 0) {
        setSelectedFilters(prev => ({ ...prev, search: '' }));
      }
    }, [500]);

    return () => {
      clearTimeout(debounce);
    };
  }, [searchText]);

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
