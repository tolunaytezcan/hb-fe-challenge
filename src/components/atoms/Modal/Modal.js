import { memo } from 'react';

import Button from 'components/atoms/Button/Button.js';

import styles from 'components/atoms/Modal/Modal.module.scss';
import { useCart } from 'hooks';

const Modal = memo(({ title, text }) => {
  const { modalVisibility, confirmRemoveProduct } = useCart();

  return (
    <>
      {modalVisibility && (
        <div>
          <div className={styles.ModalWrapper}>
            <div className={styles.ModalTitle}>
              <p>{title}</p>
            </div>
            <div className={styles.ModalBody}>{text}</div>
            <div className={styles.ModalFooter}>
              <div className={styles.ModalFooterButtons}>
                <Button name="Evet" type="accept" onClick={() => confirmRemoveProduct(true)} />
                <Button name="Hayır" type="cancel" onClick={() => confirmRemoveProduct(false)} />
              </div>
            </div>
          </div>
          <div className={styles.Blur}></div>
        </div>
      )}
    </>
  );
});

export default Modal;
