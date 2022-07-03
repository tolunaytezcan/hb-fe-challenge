import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductsProvider } from 'contexts/ProductsContext';
import { FilterProvider } from 'contexts/FilterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FilterProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </FilterProvider>
);
