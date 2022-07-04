import Button from 'components/atoms/Button/Button';

import { selectboxOptions } from 'constants';
import { useFilter } from 'hooks';

import style from 'components/molecules/Selectbox/Selectbox.module.scss';
import DownArrow from 'assets/DownArrow.svg';
import SelectedIcon from 'assets/SelectedIcon.svg';

const Selectbox = () => {
  const { selectedFilters, setSelectedFilters } = useFilter();

  const handleClick = sortOption => {
    setSelectedFilters(prev => ({ ...prev, sortOption }));
  };

  return (
    <div className={style.SelectboxContainer}>
      <Button name="Sıralama" icon={DownArrow}></Button>
      <div className={style.SelectboxOptions}>
        {selectboxOptions?.map(option => (
          <div className={style.Option} key={option.key} onClick={() => handleClick(option.key)}>
            <img
              src={SelectedIcon}
              alt="SelectedIcon"
              className={
                selectedFilters.sortOption === option.key
                  ? style.SelectedImage
                  : style.UnselectedImage
              }
            />

            <span>{option.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selectbox;
