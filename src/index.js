import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductsProvider } from 'contexts/ProductsContext';
import { FilterProvider } from 'contexts/FilterContext';
import { CartProvider } from 'contexts/CartContext';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <FilterProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </FilterProvider>
  </Router>
);
