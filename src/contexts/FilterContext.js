import { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const FilterContext = createContext();

export default FilterContext;

export const FilterProvider = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    color: '',
    brand: '',
    sort: '',
    search: ''
  });
  const history = useHistory();

  useEffect(() => {
    history.push(
      `/?brand=${selectedFilters.brand}&color=${selectedFilters.color}&sort=${selectedFilters.sort}&search=${selectedFilters.search}`
    );
  }, [selectedFilters]);

  const values = { selectedFilters, setSelectedFilters };

  return <FilterContext.Provider value={values}>{children}</FilterContext.Provider>;
};
