import { createContext, useState, useEffect } from 'react';
import { useDisclosure } from 'hooks';

const CartContext = createContext();

export default CartContext;

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [deletedProduct, setDeletedProduct] = useState();
  const { isOpen: modalVisibility, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure();

  useEffect(() => {
    const storedProducts = JSON.parse(window.localStorage.getItem('cartProducts'));
    setCartProducts(storedProducts ?? []);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);

  const addProductToCart = newProduct => {
    if (!cartProducts.some(product => product.id === newProduct.id)) {
      setCartProducts([...cartProducts, newProduct]);
    }
  };

  const removeProductFromCart = productId => {
    setDeletedProduct(productId);
    onOpenModal();
  };
  const confirmRemoveProduct = confirm => {
    confirm && setCartProducts(cartProducts.filter(product => product.id !== deletedProduct));
    onCloseModal();
  };
  const values = {
    cartProducts,
    setCartProducts,
    addProductToCart,
    removeProductFromCart,
    modalVisibility,
    onOpenModal,
    onCloseModal,
    confirmRemoveProduct
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
