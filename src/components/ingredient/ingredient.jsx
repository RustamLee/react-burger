import React from "react";
import styles from './ingredient.module.css';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";


export function Ingredient ({burgerIngredientOpen, element}) {

    return 
    <div className={styles.card}>
    <div><Counter id={element._id} count={element.count} size="default" /></div>
    <img src={element.image} alt={element.name} className={styles.image} onClick={(event) => burgerIngredientOpen(event, element)}/>
    <div className={styles.price}><p className="text text_type_digits-default mr-2">{element.price}</p>
      <CurrencyIcon type='primary' />
    </div>
    <p className={`${styles.part} text text_type_main-default`}>{element.name}</p>
  </div>
}
