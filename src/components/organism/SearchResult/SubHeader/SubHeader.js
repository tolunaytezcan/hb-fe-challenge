import Button from 'components/atoms/Button/Button';

import DownArrow from 'assets/DownArrow.svg';
import style from 'components/organism/SearchResult/SubHeader/SubHeader.module.scss';

const SubHeader = () => {
  return (
    <div className={style.SubHeaderContainer}>
      <div className={style.SubHeader}>
        <span className={style.PageTitle}>iPhone iOS cep telefonu</span>
        <span className={style.SearchTextContainer}>
          <span>{'Aranan Kelime: '}</span>
          <span className={style.SearchText}>iphone 11</span>
        </span>
      </div>
      <div className={style.SortingButtonContainer}>
        <Button name="Sırala" icon={DownArrow}></Button>
      </div>
    </div>
  );
};

export default SubHeader;
