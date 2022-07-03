import ProductCard from 'components/molecules/ProductCard/ProductCard';
import { useProducts } from 'hooks';

import styles from 'components/organism/SearchResult/ProductList/ProductList.module.scss';

const ProductList = () => {
  const { products, isLoading, isError } = useProducts();

  return (
    <div className={styles.productListContainer}>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...</div>}
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
