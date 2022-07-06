import { memo } from 'react';
import SideBar from 'components/organism/SearchResult/SideBar/SideBar';
import ProductList from 'components/organism/SearchResult/ProductList/ProductList';
import SubHeader from 'components/organism/SearchResult/SubHeader/SubHeader';
import { useProducts, useFilter } from 'hooks';

import style from 'components/organism/SearchResult/SearchResult.module.scss';
import Spinner from 'assets/Spinner.svg';
import NoResult from 'assets/NoResult.svg';
import Search from 'assets/Search.svg';

const SearchResult = memo(() => {
  const { products, isLoading, isError } = useProducts();
  const { selectedFilters } = useFilter();

  const lastIndex = selectedFilters.page * 12;
  const firstIndex = lastIndex - 12;
  const results = products?.length < 12 ? products : products?.slice(firstIndex, lastIndex);

  if (isLoading) {
    return (
      <div className={style.NoResultWrapper}>
        <div className={style.NoResultContainer}>
          <img src={Spinner} alt="Spinner" width={72} height={72} />
          <span className={style.NoResultText}>Yükleniyor</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={style.NoResultWrapper}>
        <div className={style.NoResultContainer}>
          <img src={NoResult} alt="No Product" width={72} height={72} />
          <span className={style.NoResultText}>Hata! Üzgünüz bir sorunla karşılaştık.</span>
        </div>
      </div>
    );
  }

  if (!isLoading && !isError && results?.length === 0) {
    return (
      <div className={style.NoResultWrapper}>
        <div className={style.NoResultContainer}>
          <img src={Search} alt="No Product" width={72} height={72} />
          <span className={style.NoResultText}>
            {selectedFilters?.search ? (
              <p>{selectedFilters?.search} ile ilgili sonuç bulunamamıştır.</p>
            ) : (
              <p>Sonuç bulunamadı.</p>
            )}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={style.searchResultWrapper}>
      <SubHeader />
      <div className={style.filterAndProducts}>
        <SideBar />
        <ProductList results={results} />
      </div>
    </div>
  );
});

export default SearchResult;
