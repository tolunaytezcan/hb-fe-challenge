import { memo } from 'react';

import { selectboxOptions } from 'constants';
import { useFilter } from 'hooks';

import styles from './Sort.module.scss';

const Sort = memo(() => {
  const { selectedFilters, setSelectedFilters } = useFilter();

  const handleClick = sort => {
    if (selectedFilters.sort === sort) setSelectedFilters(prev => ({ ...prev, sort: '' }));
    else setSelectedFilters(prev => ({ ...prev, sort }));
  };

  return (
    <div className={styles.SidebarContainer}>
      <p className={styles.SortName}>Sıralama</p>
      <ul className={styles.SortList}>
        {selectboxOptions?.map(option => (
          <li
            className={`${styles.Element} ${
              selectedFilters.sort === option.key ? styles.Selected : ''
            }`}
            key={option.key}
            onClick={() => handleClick(option.key)}>
            <span>{option.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Sort;
