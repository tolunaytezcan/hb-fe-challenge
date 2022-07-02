import SideBar from 'components/organism/SearchResult/SideBar/SideBar';
import ProductList from 'components/organism/SearchResult/ProductList/ProductList';
import SubHeader from 'components/organism/SearchResult/SubHeader/SubHeader';

const SearchResult = () => {
  return (
    <div>
      <SubHeader />
      <SideBar />
      <ProductList />
    </div>
  );
};

export default SearchResult;
