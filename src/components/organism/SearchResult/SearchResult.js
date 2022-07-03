import SideBar from 'components/organism/SearchResult/SideBar/SideBar';
import ProductList from 'components/organism/SearchResult/ProductList/ProductList';
import SubHeader from 'components/organism/SearchResult/SubHeader/SubHeader';

import style from 'components/organism/SearchResult/SearchResult.module.scss';

const SearchResult = () => {
  return (
    <div className={style.searchResultWrapper}>
      <SubHeader />
      <div className={style.filterAndProducts}>
        <SideBar />
        <ProductList />
      </div>
    </div>
  );
};

export default SearchResult;
