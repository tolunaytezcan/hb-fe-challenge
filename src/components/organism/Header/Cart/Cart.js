import React from 'react';
import Button from 'components/atoms/Button/Button';
import style from 'components/organism/Header/Cart/Cart.module.scss';
import { useCart } from 'hooks';

import CartBasket from 'assets/CartBasket.svg';

const Cart = () => {
  const { cartProducts, removeProductFromCart } = useCart();

  const handleRemoveProduct = productId => {
    removeProductFromCart(productId);
  };

  if (!cartProducts?.length) {
    return (
      <div className={style.cartContainer}>
        <div role="button" aria-label="animation" className={style.emptyCart}>
          <img src={CartBasket} alt="cart-empty" />
          <h3>Sepetin şu an boş</h3>
          <p>
            Sepetini Hepsiburada’nın fırsatlarla dolu dünyasından doldurmak için aşağıdaki ürünleri
            incelemeye başlayabilirsin.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={style.cartContainer}>
      {cartProducts?.map(product => (
        <div key={product.id} className={style.itemContainer}>
          <div className={style.imageContainer}>
            <img className={style.image} src={product.images[0].image} alt="cart-product-image" />
          </div>
          <div className={style.titleAndButtonContainer}>
            <p className={style.title}>{product.title}</p>
            <Button
              name="Kaldır"
              type="chartRemove"
              onClick={() => handleRemoveProduct(product.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
