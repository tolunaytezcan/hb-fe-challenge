import { render } from '@testing-library/react';
import ProductList from 'components/organism/SearchResult/ProductList/ProductList';
import ProductsContext, { ProductsProvider } from 'contexts/ProductsContext';
import FilterContext from './FilterContext';

describe('Product context test', () => {
  let items;
  let loading;
  let error;

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

  beforeEach(() => {
    render(
      <FilterContext.Provider
        value={{
          selectedFilters,
          setSelectedFilters
        }}>
        <ProductsProvider>
          <ProductsContext.Consumer>
            {({ products, isLoading, isError }) => {
              items = products;
              loading = isLoading;
              error = isError;
            }}
          </ProductsContext.Consumer>

          <ProductList />
        </ProductsProvider>
      </FilterContext.Provider>
    );
  });

  it('should be render', () => {
    expect(items).toMatchSnapshot();
  });
  it('should not have any products', () => {
    expect(items).toEqual([]);
  });
  it('should be loading set to true ', () => {
    expect(loading).toBe(true);
  });
  it('should not be any error', () => {
    expect(error).toBe(false);
  });
});
