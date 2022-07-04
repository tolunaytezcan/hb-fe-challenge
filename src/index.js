import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductsProvider } from 'contexts/ProductsContext';
import { FilterProvider } from 'contexts/FilterContext';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <FilterProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </FilterProvider>
  </Router>
);
