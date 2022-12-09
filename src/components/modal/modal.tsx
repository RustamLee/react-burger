import React, { Children } from "react";
import { createPortal } from "react-dom"
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css';
import ModalOverlay from "../modal-overlay/modal-overlay";

type TModal = {
onClick: () => void
closeModal: () => void
children: JSX.Element
}
 
export default function Modal({ onClick, closeModal, children }: TModal) {
  const closeByEsc = ((e: KeyboardEvent) => {
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
          <div className={styles.closeIcon}><CloseIcon type='primary' onClick={closeModal} /></div>
        </div>
      </>,
      document.getElementById('modals') as HTMLDivElement
    )
  }
  


