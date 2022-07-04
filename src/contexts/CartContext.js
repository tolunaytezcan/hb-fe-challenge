import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export default CartContext;

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('cartProducts'));
    setCartProducts(storedProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);

  const addProductToCart = newProduct => {
    if (!cartProducts.some(item => item.id === newProduct.id))
      return setCartProducts([...cartProducts, newProduct]);
  };

  const removeProductFromCart = productId => {
    return setCartProducts(cartProducts.filter(item => item.id !== productId));
  };

  const values = {
    cartProducts,
    setCartProducts,
    addProductToCart,
    removeProductFromCart
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
