import React, { Children } from "react";
import { createPortal } from "react-dom"
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from 'prop-types';

Modal.propTypes={
  onClick: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}

export default function Modal({ onClick, closeModal, children }) {
  const closeByEsc = ((e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  });
  
  React.useEffect(() => {
    document.addEventListener('keydown', closeByEsc);
    return () => document.removeEventListener('keydown', closeByEsc)
  }, []);
    return createPortal(
      <>
        <ModalOverlay onMouseDown={onClick} />
        <div className={styles.modal}>
          {children}
          <div className={styles.closeIcon}><CloseIcon onClick={closeModal} /></div>
        </div>
      </>,
      document.getElementById('root')
    )
  }
  


