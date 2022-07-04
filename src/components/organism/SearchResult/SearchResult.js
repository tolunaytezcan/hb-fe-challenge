import { memo } from 'react';
import SideBar from 'components/organism/SearchResult/SideBar/SideBar';
import ProductList from 'components/organism/SearchResult/ProductList/ProductList';
import SubHeader from 'components/organism/SearchResult/SubHeader/SubHeader';

import style from 'components/organism/SearchResult/SearchResult.module.scss';

const SearchResult = memo(() => {
  return (
    <div className={style.searchResultWrapper}>
      <SubHeader />
      <div className={style.filterAndProducts}>
        <SideBar />
        <ProductList />
      </div>
    </div>
  );
});

export default SearchResult;
