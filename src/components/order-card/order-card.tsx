import React, { FC } from "react";
import styles from './order-card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { TOrder, TItem, useSelector } from "../../utils/types";
import { nanoid } from "@reduxjs/toolkit";
import { useHistory, useLocation } from "react-router";

type TOrderCard = {
  number: number
  name: string
  createdAt: string
  status: string
  elements: Array<string>,
}

export const OrderCard: FC<TOrderCard> = ({ number, name, createdAt, status, elements }) => {
  const { ingredients } = useSelector(store => store.ingredientsSet)
  const location = useLocation();
  const history = useHistory()
  const filteredElements = elements.map((element) => {
    return ingredients.find(i => i._id === element)
  }).map((element) => ({ ...element, key: nanoid() }))

  const array = filteredElements.reduce((acc, item) => {
    const { price } = item
    return acc + price!
  }, 0)

  const handleClick = React.useCallback(() => {
    history.push({
      pathname: `/feed/${number}`,
      state: { background: location }
    });

  }, [])


  return (
    <div className={styles.order} onClick={handleClick}>
      <ul className={styles.cards}>
        <li className={styles.card}>
          <p className={styles.data}>
            <span className='text text_type_digits-default'># {number}</span>
            <span className='text text_type_main-default text_color_inactive'>{createdAt.toLocaleString()}</span>
          </p>
          <p className={`${styles.name} text text_type_main-medium mt-6`}>{name}</p>
          <p className='text text_type_main-small'>{status}</p>
          <div className={styles.total}>
            <>
              {filteredElements.map((item, index) => {
                if (item && index < 5)
                  return <div 
                    key={item.key}
                    style={{backgroundImage:`url(${item.image_mobile})`}} className={styles.img}></div>
              })}
            </>

            <p className={styles.price}>
              <span className='text text_type_digits-default'>{array}</span>&nbsp;&nbsp;
              <CurrencyIcon type='primary' />
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}
