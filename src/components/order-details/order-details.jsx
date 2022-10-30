import React from "react";
import styles from './order-details.module.css';
import accept from '../../images/done.svg'; 

export default function OrderDetails () {

    return(
    <div className= {styles.order}>
      <h2 className={`${styles.title} text text_type_digits-large`}>034536</h2>
      <h3 className={`${styles.subtitle} text text_type_main-medium`}>идентификатор заказа</h3>
      <img className={styles.image} src={accept}/>
      <p style={{marginBottom: 8}}  className="text text_type_main-small">
        Ваш заказ начали готовить
      </p>
      <p style={{marginBottom: 120}} className="text text_type_main-small">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
 )
}