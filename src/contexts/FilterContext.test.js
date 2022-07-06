import { render } from '@testing-library/react';
import FilterContext, { FilterProvider } from './FilterContext';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe('Filter context test', () => {
  let filters = {};

  beforeEach(() => {
    render(
      <Router>
        <FilterProvider>
          <FilterContext.Consumer>
            {({ selectedFilters }) => {
              filters = selectedFilters;
              console.log('filters:', filters);
            }}
          </FilterContext.Consumer>
        </FilterProvider>
      </Router>
    );
  });

  it('should have the filters', () => {
    expect(filters).toEqual({
      color: null,
      brand: null,
      sort: null,
      search: null,
      page: 0
    });
  });
});
