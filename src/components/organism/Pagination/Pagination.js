import { memo } from 'react';
import styles from 'components/organism/Pagination/Pagination.module.scss';

const Pagination = memo(({ currentPage, numberOfPages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  const pageDeincrement = () => {
    if (currentPage === 1) return;
    paginate(currentPage - 1);
  };

  const pageIncrement = () => {
    if (currentPage === numberOfPages) return;
    paginate(currentPage + 1);
  };

  const goToFirstPage = () => {
    paginate(1);
  };

  const goToLastPage = () => {
    paginate(numberOfPages);
  };

  return (
    <div className={styles.PaginationContainer} data-testid="pagination">
      <span className={`${styles.arrowButton} ${styles.FirstArrow}`} onClick={goToFirstPage}>
        {'<<'}
      </span>
      <span className={styles.arrowButton} onClick={pageDeincrement}>
        {'<'}
      </span>
      <ul className={styles.PaginationList}>
        {pageNumbers.map(number => (
          <li
            key={number}
            className={number === currentPage ? `${styles.activeNumber}` : ''}
            onClick={() => paginate(number)}>
            <span className={styles.numberButton}>{number}</span>
          </li>
        ))}
      </ul>
      <span className={styles.arrowButton} onClick={pageIncrement}>
        {'>'}
      </span>
      <span className={`${styles.arrowButton} ${styles.LastArrow}`} onClick={goToLastPage}>
        {'>>'}
      </span>
    </div>
  );
});

export default Pagination;
