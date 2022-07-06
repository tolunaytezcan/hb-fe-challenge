import Modal from 'components/atoms/Modal/Modal';
import Header from 'components/organism/Header/Header';
import SearchResult from 'components/organism/SearchResult/SearchResult';
import 'styles/globals.scss';

const App = () => {
  return (
    <>
      <Header />
      <SearchResult />
      <Modal
        title="Ürünü silmek istediğinize emin misiniz?"
        text="Onayladığınız takdirde ürün sepetinizden kaldırılacaktır."
      />
    </>
  );
};

export default App;
