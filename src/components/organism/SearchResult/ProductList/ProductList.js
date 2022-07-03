import ProductCard from 'components/molecules/ProductCard/ProductCard';
import { useProducts, useFilter } from 'hooks';

import styles from 'components/organism/SearchResult/ProductList/ProductList.module.scss';

const ProductList = () => {
  const { products, isLoading, isError } = useProducts();
  const { selectedFilter, selectedProperty } = useFilter();

  const filteredData =
    selectedFilter || selectedProperty
      ? products.filter(
          product => product.color === selectedProperty || product.brand === selectedProperty
        )
      : products;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className={styles.productListContainer}>
      {(filteredData.length > 0 ? filteredData : products)?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
