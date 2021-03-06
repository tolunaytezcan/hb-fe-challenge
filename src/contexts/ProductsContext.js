import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from 'api';
import { useFilter } from 'hooks';

const ProductsContext = createContext();

export default ProductsContext;

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { selectedFilters } = useFilter();

  const colorFilter = selectedFilters?.color?.length > 0 ? `color=${selectedFilters.color}` : '';
  const brandFilter = selectedFilters?.brand?.length > 0 ? `brand=${selectedFilters.brand}` : '';
  const searchFilter =
    selectedFilters?.search?.length > 2 ? `title_like=${selectedFilters.search}` : '';

  let sortOption = '';

  switch (selectedFilters?.sort) {
    case 'asc':
      sortOption = `_sort=price&_order=${selectedFilters.sort}`;
      break;
    case 'desc':
      sortOption = `_sort=price&_order=${selectedFilters.sort}`;
      break;

    case 'newest':
      sortOption = `_sort=createdDate&_order=desc`;
      break;

    case 'oldest':
      sortOption = `_sort=createdDate&_order=asc`;
      break;
  }

  const sort = selectedFilters?.sort?.length > 0 ? `${sortOption}` : '';

  const filteredURL = `${baseURL}?${brandFilter}&${colorFilter}&${sort}&${searchFilter}`;

  const getData = async url => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData(filteredURL);
  }, [filteredURL]);

  const values = { products, isLoading, isError };

  return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>;
};
