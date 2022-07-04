import { selectboxOptions } from 'constants';
import { useFilter } from 'hooks';
import styles from './Sort.module.scss';

const Sort = () => {
  const { selectedFilters, setSelectedFilters } = useFilter();

  const handleClick = sortOption => {
    setSelectedFilters(prev => ({ ...prev, sortOption }));
  };

  return (
    <div className={styles.SidebarContainer}>
      <p className={styles.SortName}>Sıralama</p>
      <ul className={styles.SortList}>
        {selectboxOptions?.map(option => (
          <li
            className={`${styles.Element} ${
              selectedFilters.sortOption === option.key ? styles.Selected : ''
            }`}
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
