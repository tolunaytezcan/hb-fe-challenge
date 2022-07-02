import { useContext } from 'react';
import ProductsContext from 'contexts/ProductsContex';

export const useProducts = () => useContext(ProductsContext);
