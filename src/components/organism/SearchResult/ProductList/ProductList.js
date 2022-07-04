import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ProductCard from 'components/molecules/ProductCard/ProductCard';
import Pagination from 'components/organism/Pagination/Pagination';
import { useProducts } from 'hooks';

import styles from 'components/organism/SearchResult/ProductList/ProductList.module.scss';

const ProductList = () => {
  const history = useHistory();
  const { products, isLoading, isError } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * 12;
  const firstIndex = lastIndex - 12;
  const results = products?.slice(firstIndex, lastIndex);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    history.push(`/?page=${pageNumber}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <div className={styles.productListContainer}>
        {results?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div>
        <Pagination
          numberOfPages={Math.round(products?.length / 12 + 1)}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ProductList;
