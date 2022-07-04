import { useContext, useState, useCallback } from 'react';
import ProductsContext from 'contexts/ProductsContext';
import FilterContext from 'contexts/FilterContext';
import CartContext from 'contexts/CartContext';

export const useProducts = () => useContext(ProductsContext);

export const useFilter = () => useContext(FilterContext);

export const useCart = () => useContext(CartContext);

export const useDisclosure = isOpenInit => {
  const [isOpen, setIsOpen] = useState(!!isOpenInit);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return { isOpen, onOpen, onClose, onToggle };
};
