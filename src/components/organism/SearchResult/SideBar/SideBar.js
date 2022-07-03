import Filter from 'components/organism/SearchResult/SideBar/Filter/Filter.js';
import style from 'components/organism/SearchResult/SideBar/SideBar.module.scss';
import Sort from 'components/organism/SearchResult/SideBar/Sort/Sort.js';

const SideBar = () => {
  const colorCounts = {
    Siyah: 6,
    Yeşil: 6,
    Mor: 4,
    Kırmızı: 3,
    Mavi: 8,
    Gri: 2,
    Pembe: 2,
    Beyaz: 7
  };

  const brandCounts = {
    Apple: 14,
    Samsung: 9,
    Xiaomi: 6,
    Huawei: 5,
    Reeder: 4
  };

  return (
    <div className={style.sideBarContainer}>
      <Filter data={colorCounts} filterName="Renk" />
      <Sort />
      <Filter data={brandCounts} filterName="Marka" />
    </div>
  );
};

export default SideBar;
