import Button from 'components/atoms/Button/Button';
import SearchInput from 'components/atoms/SearchInput/SearchInput';

import style from './Header.module.scss';
import Logo from 'assets/Logo.svg';

const Header = () => {
  return (
    <div className={style.headerWrapper}>
      <div className={style.logoContainer}>
        <img className={style.hbLogo} src={Logo} alt="Logo icon" />
      </div>
      <div className={style.searchInputContainer}>
        <SearchInput />
      </div>
      <div className={style.cartContainer}>
        <Button name="Sepetim" />
      </div>
    </div>
  );
};

export default Header;
