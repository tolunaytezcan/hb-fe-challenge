import { render } from '@testing-library/react';
import FilterContext from 'contexts/FilterContext';
import ProductsContext from 'contexts/ProductsContext';
import CartContext from 'contexts/CartContext';
import SearchResult from 'components/organism/SearchResult/SearchResult';

import { BrowserRouter as Router } from 'react-router-dom';

describe('Search result component test', () => {
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

  const products = [
    {
      id: 5,
      brand: 'Apple',
      title: 'iPhone 12 64GB',
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
  const cartProducts = [];

  it('should be render correctly', () => {
    const component = render(
      <Router>
        <FilterContext.Provider
          value={{
            selectedFilters,
            setSelectedFilters
          }}>
          <ProductsContext.Provider value={{ products }}>
            <CartContext.Provider value={{ cartProducts }}>
              <SearchResult />
            </CartContext.Provider>
          </ProductsContext.Provider>
        </FilterContext.Provider>
      </Router>
    );

    expect(component).toBeTruthy();
  });

  it('should render no result  if products are empty', () => {
    const component = render(
      <FilterContext.Provider
        value={{
          selectedFilters,
          setSelectedFilters
        }}>
        <ProductsContext.Provider value={{ products: [] }}>
          <SearchResult />
        </ProductsContext.Provider>
      </FilterContext.Provider>
    );

    expect(component.getByText('Sonuç bulunamadı.')).toBeTruthy();
  });

  it('should render loading  if loading is true', () => {
    const component = render(
      <FilterContext.Provider
        value={{
          selectedFilters,
          setSelectedFilters
        }}>
        <ProductsContext.Provider value={{ isLoading: true }}>
          <SearchResult />
        </ProductsContext.Provider>
      </FilterContext.Provider>
    );

    expect(component.getByText('Yükleniyor')).toBeTruthy();
  });

  it('should render error  if error is true', () => {
    const component = render(
      <FilterContext.Provider
        value={{
          selectedFilters,
          setSelectedFilters
        }}>
        <ProductsContext.Provider value={{ isError: true }}>
          <SearchResult />
        </ProductsContext.Provider>
      </FilterContext.Provider>
    );

    expect(component.getByText('Hata! Üzgünüz bir sorunla karşılaştık.')).toBeTruthy();
  });
});
