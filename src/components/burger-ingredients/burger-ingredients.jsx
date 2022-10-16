import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients.module.css'
export default function BurgerIngredients({ingredients}) {
  console.log(ingredients)
  return (
    <>
      {ingredients && ingredients.map((element) => {
        console.log(element)
        if (element.type === 'sauce')
        return <div key={element._id} className={styles.ingredient}>
          <img src={element.image} alt={element.name}/>
          <p>{element.name}</p>
          <div><p>{element.price}</p>
            <CurrencyIcon type='primary' /></div>
        </div>
      })}
    </>
  )
}