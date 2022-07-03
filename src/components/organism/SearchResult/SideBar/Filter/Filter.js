import { useMemo } from 'react';
import { useFilter } from 'hooks';

import styles from './Filter.module.scss';

const Filter = ({ data, filterName }) => {
  const { setSelectedFilter, selectedProperty, setSelectedProperty } = useFilter();

  const handleClick = property => {
    setSelectedFilter(filterName);
    setSelectedProperty(property);
  };

  const filteredData = useMemo(() =>
    Object.keys(data).map(key => {
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
              selectedProperty === item.property ? styles.Selected : ''
            }`}
            key={item.property}
            onClick={() => handleClick(item.property)}>
            <span>{item.property}</span> <span>({item.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
