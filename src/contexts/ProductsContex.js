import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { baseURL } from 'api';

const ProductsContext = createContext();

export default ProductsContext;

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(baseURL);
        setProducts(response.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    !products.length > 0 && getProducts();
  }, [products]);

  const values = { products, isLoading, isError };

  return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>;
};
