import React from 'react';
import CartContext, { CartProvider } from './CartContext';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Cart Context', () => {
  let visibility;
  let products;
  let openModal;

  beforeEach(() => {
    render(
      <CartProvider>
        <CartContext.Consumer>
          {({ modalVisibility, cartProducts, onOpenModal }) => {
            visibility = modalVisibility;
            products = cartProducts;
            openModal = onOpenModal;
          }}
        </CartContext.Consumer>
      </CartProvider>
    );
  });

  it('should not be visible modal by default', () => {
    expect(visibility).toBe(false);
  });

  it('should not have products in the cart', () => {
    expect(products).toEqual([]);
  });

  it('should set the modal visibility to true', () => {
    act(() => openModal(true));
    expect(openModal).toBeTruthy();
  });
});
