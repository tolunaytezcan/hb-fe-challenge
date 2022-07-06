import { render } from '@testing-library/react';
import ProductList from 'components/organism/SearchResult/ProductList/ProductList';
import ProductsContext from 'contexts/ProductsContext';
import FilterContext from './FilterContext';

describe('Product context test', () => {
  const products = [
    {
      id: 1,
      brand: 'Apple',
      title: 'iPhone 11 64GB',
      price: 13950,
      color: 'Siyah',
      images: [
        {
          image: 'https://productimages.hepsiburada.net/s/49/400-592/10986385899570.jpg'
        }
      ],
      discountRate: 12,
      createdDate: '2022-07-02T17:51:41.382Z'
    }
  ];

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

  it('should be render correctly', () => {
    const component = render(
      <FilterContext.Provider
        value={{
          selectedFilters,
          setSelectedFilters
        }}>
        <ProductsContext.Provider value={{ products }}>
          <ProductList />
        </ProductsContext.Provider>
      </FilterContext.Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
