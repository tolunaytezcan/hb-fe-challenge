import Selectbox from 'components/molecules/Selectbox/Selectbox';
import { useFilter } from 'hooks';

import style from 'components/organism/SearchResult/SubHeader/SubHeader.module.scss';

const SubHeader = () => {
  const { selectedFilters } = useFilter();
  return (
    <div className={style.SubHeaderContainer}>
      <div className={style.SubHeader}>
        <span className={style.PageTitle}>Cep Telefonu Fiyatları ve Modelleri</span>
        <span className={style.SearchTextContainer}>
          {selectedFilters?.search && (
            <>
              <span>{'Aranan Kelime: '}</span>
              <span className={style.SearchText}>{selectedFilters?.search}</span>
            </>
          )}
        </span>
      </div>
      <div>
        <Selectbox />
      </div>
    </div>
  );
};

export default SubHeader;
