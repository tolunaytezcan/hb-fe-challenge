import { memo } from 'react';

import Button from 'components/atoms/Button/Button';
import styles from 'components/molecules/ProductCard/ProductCard.module.scss';
import { useCart } from 'hooks';

const ProductCard = memo(({ product }) => {
  const { addProductToCart, cartProducts } = useCart();

  const formatter = new Intl.NumberFormat('tr-TR', {
    minimumFractionDigits: 2
  });

  const handleAddToCart = () => {
    addProductToCart(product);
  };

  const isProductInCart = cartProducts?.some(item => item.id === product?.id);

  return (
    <div className={styles.productCardContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={product?.images?.[0]?.image} alt={product?.name} />
      </div>
      <div className={styles.productProperties}>
        <div>
          <p className={styles.productTitle}>{product?.title}</p>
          <p className={styles.productbrand}>
            <span>Marka: </span>
            {product?.brand}
          </p>
          <p className={styles.productColor}>
            <span>Renk: </span>
            {product?.color}
          </p>
          <p className={styles.discountedPrice}>
            {formatter.format(
              product?.price - Number(product?.price * product?.discountRate) / 100
            )}
            TL
          </p>
        </div>

        <div className={styles.prevPriceContainer}>
          <span className={styles.prevPrice}>{formatter.format(product?.price)} TL</span>
          <span className={styles.discountRate}>{product?.discountRate}%</span>
        </div>
        <div className={styles.productCartButton}>
          <Button
            onClick={handleAddToCart}
            disable={isProductInCart}
            name={isProductInCart ? 'Bu ürün zaten sepetinizde ekli' : 'Sepete Ekle'}
            type="orange"
          />
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
