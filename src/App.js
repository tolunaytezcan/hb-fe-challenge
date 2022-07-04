import Header from 'components/organism/Header/Header';
import SearchResult from 'components/organism/SearchResult/SearchResult';
import { Route } from 'react-router-dom';
import 'styles/globals.scss';

const App = () => {
  return (
    <Route exact path="/">
      <Header />
      <SearchResult />
    </Route>
  );
};

export default App;
