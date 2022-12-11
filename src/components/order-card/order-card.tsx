import React from "react";
import styles from './order-card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';


export function OrderCard() {

  return (
    <div className={styles.order}>
      <ul className={styles.cards}>
        <li className={styles.card}>
          <p className={styles.data}>
            <span className='text text_type_digits-default'># order</span>
            <span className='text text_type_main-default text_color_inactive'>Дата</span>
          </p>
          <p className='text text_type_main-medium mt-6'>Название бургера</p>
          <div className={styles.total}>
            <div className={styles.image}>
            </div>
            <p className={styles.price}>
              <span className='text text_type_digits-default'>Price</span>&nbsp;&nbsp;
              <CurrencyIcon type='primary' />
            </p>
          </div>
        </li>
        <li className={styles.card}>
          <p className={styles.data}>
            <span className='text text_type_digits-default'># order</span>
            <span className='text text_type_main-default text_color_inactive'>Дата</span>
          </p>
          <p className='text text_type_main-medium mt-6'>Название бургера</p>
          <div className={styles.total}>
            <div className={styles.image}>
            </div>
            <p className={styles.price}>
              <span className='text text_type_digits-default'>Price</span>&nbsp;&nbsp;
              <CurrencyIcon type='primary' />
            </p>
          </div>
        </li>
        <li className={styles.card}>
          <p className={styles.data}>
            <span className='text text_type_digits-default'># order</span>
            <span className='text text_type_main-default text_color_inactive'>Дата</span>
          </p>
          <p className='text text_type_main-medium mt-6'>Название бургера</p>
          <div className={styles.total}>
            <div className={styles.image}>
            </div>
            <p className={styles.price}>
              <span className='text text_type_digits-default'>Price</span>&nbsp;&nbsp;
              <CurrencyIcon type='primary' />
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}