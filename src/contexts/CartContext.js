import { createContext, useState } from 'react';

const CartContext = createContext();

export default CartContext;

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const values = {
    cartProducts,
    setCartProducts
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
