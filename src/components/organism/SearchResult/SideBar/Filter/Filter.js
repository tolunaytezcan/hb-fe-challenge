import { memo, useMemo } from 'react';
import { useFilter } from 'hooks';

import styles from './Filter.module.scss';
import SelectedIcon from 'assets/SelectedIcon.svg';

const Filter = memo(({ data, filterName, filterKey }) => {
  const { selectedFilters, setSelectedFilters } = useFilter();

  const handleClick = (filterKey, property) => {
    if (selectedFilters[filterKey] === property) {
      setSelectedFilters(prev => ({ ...prev, [filterKey]: '', page: 1 }));
    } else {
      setSelectedFilters(prev => ({ ...prev, [filterKey]: property, page: 1 }));
    }
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
            {selectedFilters[filterKey] === item.property && (
              <span>
                <img src={SelectedIcon} alt="SelectedIcon" className={styles.SelectedIcon} />
              </span>
            )}
            <span>{item.property}</span>
            <span>({item.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Filter;
