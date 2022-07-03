import { useState } from 'react';
import Button from 'components/atoms/Button/Button';

import style from 'components/molecules/Selectbox/Selectbox.module.scss';
import DownArrow from 'assets/DownArrow.svg';
import SelectedIcon from 'assets/SelectedIcon.svg';
import { selectboxOptions } from './constants';

const Selectbox = () => {
  const [selected, setSelected] = useState(selectboxOptions[0].key);

  const handleClick = option => {
    setSelected(option);
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
              className={selected === option.key ? style.SelectedImage : style.UnselectedImage}
            />

            <span>{option.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selectbox;
