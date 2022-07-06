import { render } from '@testing-library/react';
import SearchInput from 'components/atoms/SearchInput/SearchInput.js';
import FilterContext from 'contexts/FilterContext';

describe('SearchInput component', () => {
  let selectedFilters = {
    color: '',
    brand: '',
    sort: '',
    search: '',
    page: 1
  };

  const setSelectedFilters = () => {
    selectedFilters = {
      color: '',
      brand: '',
      sort: '',
      search: '',
      page: 1
    };
  };
  it('should be rendered', () => {
    const component = render(
      <FilterContext.Provider
        value={{
          selectedFilters,
          setSelectedFilters
        }}>
        <SearchInput searchText="deneme" />
      </FilterContext.Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
