import Button from 'components/atoms/Button/Button';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import { useFilter, useCart } from 'hooks';

import style from 'components/organism/Header/Header.module.scss';
import Logo from 'assets/Logo.svg';
import Cart from './Cart/Cart';

const Header = () => {
  const { setSelectedFilter, setSelectedProperty } = useFilter();
  const { cartProducts } = useCart();

  const handleClick = () => {
    setSelectedFilter('');
    setSelectedProperty('');
  };

  return (
    <div className={style.headerWrapper}>
      <div className={style.logoContainer} onClick={handleClick}>
        <img className={style.hbLogo} src={Logo} alt="Logo icon" />
      </div>
      <div className={style.searchInputContainer}>
        <SearchInput />
      </div>
      <div className={style.cartContainer}>
        <Button name="Sepetim" badge={cartProducts?.length} />
        <div className={style.cart}>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Header;
