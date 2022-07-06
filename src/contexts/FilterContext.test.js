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
            }}
          </FilterContext.Consumer>
        </FilterProvider>
      </Router>
    );
  });

  it('should have the filters', () => {
    expect(filters).toEqual({
      color: '',
      brand: '',
      sort: '',
      search: '',
      page: 1
    });
  });
});
