import { useState, createContext } from 'react';

const FilterContext = createContext();

export default FilterContext;

export const FilterProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedProperty, setSelectedProperty] = useState('');

  const values = { selectedFilter, setSelectedFilter, selectedProperty, setSelectedProperty };

  return <FilterContext.Provider value={values}>{children}</FilterContext.Provider>;
};
