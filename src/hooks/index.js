import { useContext } from 'react';
import ProductsContext from 'contexts/ProductsContext';
import FilterContext from 'contexts/FilterContext';

export const useProducts = () => useContext(ProductsContext);

export const useFilter = () => useContext(FilterContext);
