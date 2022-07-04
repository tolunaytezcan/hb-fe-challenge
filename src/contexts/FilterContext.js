import { useState, createContext, useEffect } from 'react';

const FilterContext = createContext();

export default FilterContext;

export const FilterProvider = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    color: '',
    brand: ''
  });

  useEffect(() => {
    console.log(selectedFilters);
  }, [selectedFilters]);

  const values = { selectedFilters, setSelectedFilters };

  return <FilterContext.Provider value={values}>{children}</FilterContext.Provider>;
};
