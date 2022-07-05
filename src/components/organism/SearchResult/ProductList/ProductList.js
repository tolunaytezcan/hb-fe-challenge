import { useEffect } from 'react';

import ProductCard from 'components/molecules/ProductCard/ProductCard';
import Pagination from 'components/organism/Pagination/Pagination';
import { useFilter, useProducts } from 'hooks';

import styles from 'components/organism/SearchResult/ProductList/ProductList.module.scss';
import Search from 'assets/Search.svg';
import Spinner from 'assets/Spinner.svg';
import NoResult from 'assets/NoResult.svg';

const ProductList = () => {
  const { products, isLoading, isError } = useProducts();
  const { selectedFilters, setSelectedFilters } = useFilter();

  useEffect(() => {
    if (products?.length < 12) {
      setSelectedFilters(prev => ({ ...prev, page: 1 }));
    }
  }, [products]);

  const lastIndex = selectedFilters.page * 12;
  const firstIndex = lastIndex - 12;
  const results = products?.length < 12 ? products : products?.slice(firstIndex, lastIndex);

  if (isLoading) {
    return (
      <div className={styles.NoResultWrapper}>
        <div className={styles.NoResultContainer}>
          <img src={Spinner} alt="Spinner" width={72} height={72} />
          <span className={styles.NoResultText}>Yükleniyor</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.NoResultWrapper}>
        <div className={styles.NoResultContainer}>
          <img src={NoResult} alt="No Product" width={72} height={72} />
          <span className={styles.NoResultText}>Hata! Üzgünüz bir sorunla karşılaştık.</span>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className={styles.NoResultWrapper}>
        <div className={styles.NoResultContainer}>
          <img src={Search} alt="No Product" width={72} height={72} />
          <span className={styles.NoResultText}>
            {selectedFilters?.search} ile ilgili sonuç bulunamamıştır.
          </span>
        </div>
      </div>
    );
  }

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
};

export default ProductList;
