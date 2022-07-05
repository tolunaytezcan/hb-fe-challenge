import { memo } from 'react';

import ProductCard from 'components/molecules/ProductCard/ProductCard';
import Pagination from 'components/organism/Pagination/Pagination';
import { useFilter, useProducts } from 'hooks';

import styles from 'components/organism/SearchResult/ProductList/ProductList.module.scss';

const ProductList = memo(({ results }) => {
  const { products } = useProducts();
  const { selectedFilters, setSelectedFilters } = useFilter();

  const paginate = pageNumber => {
    setSelectedFilters({ ...selectedFilters, page: pageNumber });
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className={styles.productListContainer}>
        {results?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div>
        <Pagination
          numberOfPages={Math.ceil(products?.length / 12)}
          paginate={paginate}
          currentPage={selectedFilters.page}
        />
      </div>
    </div>
  );
});

export default ProductList;
