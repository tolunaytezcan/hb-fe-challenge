import { selectboxOptions } from 'constants';
import styles from './Sort.module.scss';

const Sort = () => {
  const handleClick = option => {
    console.log('option:', option);
  };

  return (
    <div className={styles.SidebarContainer}>
      <p className={styles.SortName}>Sıralama</p>
      <ul className={styles.SortList}>
        {selectboxOptions?.map(option => (
          <li
            className={`${styles.Element}`}
            key={option.key}
            onClick={() => handleClick(option.key)}>
            <span>{option.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
