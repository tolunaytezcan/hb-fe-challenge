import Modal from 'components/atoms/Modal/Modal';
import Header from 'components/organism/Header/Header';
import SearchResult from 'components/organism/SearchResult/SearchResult';
import { Route } from 'react-router-dom';
import 'styles/globals.scss';

const App = () => {
  return (
    <Route exact path="/">
      <Header />
      <SearchResult />
      <Modal
        title="Ürünü silmek istediğinize emin misiniz?"
        text="Onayladığınız takdirde ürün sepetinizden kaldırılacaktır."
      />
    </Route>
  );
};

export default App;
