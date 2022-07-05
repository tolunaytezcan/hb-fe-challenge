import { createContext, useState, useEffect, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const FilterContext = createContext();

export default FilterContext;

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export const FilterProvider = ({ children }) => {
  const history = useHistory();
  const [selectedFilters, setSelectedFilters] = useState({
    color: '',
    brand: '',
    sort: '',
    search: '',
    page: 1
  });

  const clearFilters = () => {
    setSelectedFilters({
      color: '',
      sort: '',
      search: '',
      brand: '',
      page: 1
    });
  };

  let query = useQuery();

  const colorQuery = query.get('color');
  const brandQuery = query.get('brand');
  const sortQuery = query.get('sort');
  const searchQuery = query.get('search');
  const pageQuery = query.get('page');

  useEffect(() => {
    setSelectedFilters(prev => ({ ...prev, brand: brandQuery }));
    setSelectedFilters(prev => ({ ...prev, color: colorQuery }));
    setSelectedFilters(prev => ({ ...prev, sort: sortQuery }));
    setSelectedFilters(prev => ({ ...prev, search: searchQuery }));
    setSelectedFilters(prev => ({ ...prev, page: +pageQuery }));
  }, []);

  useEffect(() => {
    history.push(
      `/?brand=${selectedFilters.brand}&color=${selectedFilters.color}&sort=${selectedFilters.sort}&search=${selectedFilters.search}&page=${selectedFilters.page}`
    );
  }, [selectedFilters]);

  const values = { selectedFilters, setSelectedFilters, clearFilters };

  return <FilterContext.Provider value={values}>{children}</FilterContext.Provider>;
};
