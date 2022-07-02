import { useEffect } from 'react';

import Header from 'components/organism/Header/Header';
import SearchResult from 'components/organism/SearchResult/SearchResult';
import { fetchData } from 'api';

import 'styles/globals.scss';

const App = () => {
  const data = [];

  useEffect(() => {
    !data.length && fetchData();
  }, [data]);

  return (
    <>
      <Header />
      <SearchResult />
    </>
  );
};

export default App;
