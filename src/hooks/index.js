import { useContext } from 'react';
import ProductsContext from 'contexts/ProductsContext';
import FilterContext from 'contexts/FilterContext';
import CartContext from 'contexts/CartContext';

export const useProducts = () => useContext(ProductsContext);

export const useFilter = () => useContext(FilterContext);

export const useCart = () => useContext(CartContext);
