import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CartContext from 'contexts/CartContext';
import FilterContext from 'contexts/FilterContext';
import ProductsContext from 'contexts/ProductsContext';

import App from './App';

describe('Project should be worked without crash', () => {
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

  const cartProducts = [
    {
      id: 1,
      brand: 'Apple',
      title: 'iPhone 12 128GB',
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

  it('App component', () => {
    const component = render(
      <Router>
        <FilterContext.Provider
          value={{
            selectedFilters,
            setSelectedFilters
          }}>
          <ProductsContext.Provider value={{ products }}>
            <CartContext.Provider value={{ cartProducts }}>
              <App />
            </CartContext.Provider>
          </ProductsContext.Provider>
        </FilterContext.Provider>
      </Router>
    );

    expect(component).toMatchSnapshot();
  });
});
