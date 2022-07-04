import { memo, useMemo } from 'react';
import { useFilter } from 'hooks';

import styles from './Filter.module.scss';

const Filter = memo(({ data, filterName, filterKey }) => {
  const { selectedFilters, setSelectedFilters } = useFilter();

  const handleClick = (filterKey, key) => {
    setSelectedFilters(prev => ({ ...prev, [filterKey]: key }));
  };

  const filteredData = useMemo(() =>
    Object.keys(data || []).map(key => {
      return {
        property: key,
        count: data[key]
      };
    })
  );

  return (
    <div className={styles.SidebarContainer}>
      <p className={styles.FilterName}>{filterName}</p>
      <ul className={styles.FilterList}>
        {filteredData?.map(item => (
          <li
            className={`${styles.Element} ${
              selectedFilters[filterKey] === item.property ? styles.Selected : ''
            }`}
            key={item.property}
            onClick={() => handleClick(filterKey, item.property)}>
            <span>{item.property}</span> <span>({item.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Filter;
