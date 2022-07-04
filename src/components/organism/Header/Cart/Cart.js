import React from 'react';
import Button from 'components/atoms/Button/Button';
import style from 'components/organism/Header/Cart/Cart.module.scss';

const Cart = () => {
  return (
    <div className={style.cartContainer}>
      <div className={style.itemContainer}>
        <div className={style.imageContainer}>
          <img
            className={style.image}
            src="https://productimages.hepsiburada.net/s/49/400-592/10986385899570.jpg"
            alt="cart-product-image"
          />
        </div>
        <div className={style.titleAndButtonContainer}>
          <p className={style.title}>
            Iphone Xs Max 64GB - Space Gray - Garanti Iphone Xs Max 64GB - Space Gray - Garanti
            Iphone Xs Max 64GB - Space Gray - Garanti
          </p>
          <Button name="Kaldır" type="chartRemove" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
