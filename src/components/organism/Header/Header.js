import { useState, memo } from 'react';
import Button from 'components/atoms/Button/Button';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import { useFilter, useCart } from 'hooks';

import style from 'components/organism/Header/Header.module.scss';
import Logo from 'assets/Logo.svg';
import Cart from './Cart/Cart';

const Header = memo(() => {
  const { setSelectedFilters } = useFilter();
  const { cartProducts } = useCart();
  const [searchText, setSearchText] = useState('');

  const handleClickLogo = () => {
    setSelectedFilters({
      color: '',
      sort: '',
      search: '',
      brand: '',
      page: 1
    });
    setSearchText('');
  };

  return (
    <div className={style.headerWrapper}>
      <div className={style.logoContainer} onClick={handleClickLogo}>
        <img className={style.hbLogo} src={Logo} alt="Logo icon" />
      </div>
      <div className={style.searchInputContainer}>
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className={style.cartContainer}>
        <Button name="Sepetim" badge={cartProducts?.length} />
        <div className={style.cart}>
          <Cart />
        </div>
      </div>
    </div>
  );
});

export default Header;
