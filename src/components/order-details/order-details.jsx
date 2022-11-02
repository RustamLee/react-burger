import React from "react";
import styles from './order-details.module.css';
import accept from '../../images/done.svg'; 
import { useSelector } from "react-redux";


export default function OrderDetails () {
    const id = useSelector(store => store.orderDetail.id)
    console.log(id)
    return(
    <div className= {styles.order}>
      <h2 className={`${styles.title} text text_type_digits-large`}>{id}</h2>
      <h3 className={`${styles.subtitle} text text_type_main-medium`}>идентификатор заказа</h3>
      <img className={styles.image} src={accept}/>
      <p className={`${styles.result} text text_type_main-small`}>
        Ваш заказ начали готовить
      </p>
      <p className={`${styles.waitResult} text text_type_main-small`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
 )
}