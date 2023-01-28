import React  from "react";
import styles from './modal-overlay.module.css';

type TModalOverlay = {
  onMouseDown: () => void
}

export default function ModalOverlay({ onMouseDown }: TModalOverlay) {

  return (
    <div className={styles.overlay} onMouseDown={onMouseDown}>
    </div>
  )
}
