import React from "react";
import { CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients.module.css'
import Tab from "../tabs/tab";


export default function BurgerIngredients({ingredients}) {
  console.log(ingredients)
  return (
    <div className = {styles.ingredients}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <Tab />
<div className= {styles.ingredient}>
      {ingredients && ingredients.map((element) => {
        if (element.type === 'sauce')
        return <div key={element._id} className={styles.ingredient}>
          <div className={styles.card}>
          <img src={element.image} alt={element.name}/>
          <p>{element.name}</p>
          <div><p>{element.price}</p>
            <CurrencyIcon type='primary' /></div>
            </div>
        </div>
                {<h2 className="text text_type_main-large">Булки</h2>}
        if (element.type === 'bun')
        return <div key={element._id} className={styles.ingredient}>
          <div className={styles.card}>
          <img src={element.image} alt={element.name}/>
          <p>{element.name}</p>
          <div><p>{element.price}</p>
            <CurrencyIcon type='primary' /></div>
            </div>
        </div>
        if (element.type === 'main')
        return <div key={element._id} className={styles.ingredient}>
          <div className={styles.card}>
          <img src={element.image} alt={element.name}/>
          <p>{element.name}</p>
          <div><p>{element.price}</p>
            <CurrencyIcon type='primary' /></div>
            </div>
        </div>
      }
      )}
      </div>
    </div>
  )
}