import { createContext, useState } from 'react';

const FilterContext = createContext();

export default FilterContext;

export const FilterProvider = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    color: '',
    brand: '',
    sortOption: 'lowToHigh'
  });

  const values = { selectedFilters, setSelectedFilters };

  return <FilterContext.Provider value={values}>{children}</FilterContext.Provider>;
};
