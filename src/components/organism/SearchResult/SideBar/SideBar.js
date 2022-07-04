import { memo, useMemo } from 'react';
import Filter from 'components/organism/SearchResult/SideBar/Filter/Filter.js';
import { useProducts } from 'hooks';

import style from 'components/organism/SearchResult/SideBar/SideBar.module.scss';
import Sort from './Sort/Sort';

const SideBar = memo(() => {
  const { products } = useProducts();

  const colorCounts = useMemo(
    () =>
      products.reduce((acc, product) => {
        acc[product.color] ? acc[product.color]++ : (acc[product.color] = 1);
        return acc;
      }, {}),
    [products]
  );

  const brandCounts = useMemo(
    () =>
      products.reduce((acc, product) => {
        acc[product.brand] ? acc[product.brand]++ : (acc[product.brand] = 1);
        return acc;
      }, {}),
    [products]
  );

  return (
    <div className={style.sideBarContainer}>
      <Filter data={colorCounts} filterKey="color" filterName="Renk" />
      <Sort />
      <Filter data={brandCounts} filterKey="brand" filterName="Marka" />
    </div>
  );
});

export default SideBar;
