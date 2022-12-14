import React from "react";
import styles from './profile-order.module.css';
import { OrderCard } from '../../components/order-card/order-card';

export default function ProfileOrder() {

//если заказ принадлежит текущему пользователю, отрисовываем их в списке

  return (
    <div className={styles.orders}>
      {/* <OrderCard /> */}
    </div>
  )
}
