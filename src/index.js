import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductsProvider } from 'contexts/ProductsContext';
import { FilterProvider } from 'contexts/FilterContext';
import { CartProvider } from 'contexts/CartContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Route exact path="/">
      <FilterProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </FilterProvider>
    </Route>
  </Router>
);
