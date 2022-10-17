import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients.module.css'
import Tab from "../tabs/tab";

export default function BurgerIngredients({ ingredients }) {
  console.log(ingredients)
  return (
    <div className={styles.ingredients}>
      <h1 className={`${styles.title} text text_type_main-large`}>Соберите бургер</h1>
      <Tab />
      <h2 className={styles.block}>Булки</h2>
      <section className={styles.ingredient}>
        {ingredients && ingredients.map((element) => {
          if (element.type === 'bun')
            return <div key={element._id}>
              <div className={styles.card}>
                <img src={element.image} alt={element.name} className = {styles.image}/>
                <div className={styles.price}><p>{element.price}</p>
                  <CurrencyIcon type='primary' />
                </div>
                <p className= {styles.part}>{element.name}</p>
              </div>
            </div>
        }
        )}
      </section>
        <h2>Соусы</h2>
        <section className={styles.ingredient}>
        {ingredients && ingredients.map((element) => {
          if (element.type === 'sauce')
            return <div key={element._id}>
              <div className={styles.card}>
                <img src={element.image} alt={element.name} className = {styles.image}/>
                <div className={styles.price}><p>{element.price}</p>
                  <CurrencyIcon type='primary' />
                </div>
                <p className= {styles.part}>{element.name}</p>
              </div>
            </div>
        }
        )}
      </section>
      <h2>Начинки</h2>
      <section className={styles.ingredient}>
        {ingredients && ingredients.map((element) => {
          if (element.type === 'main')
            return <div key={element._id}>
              <div className={styles.card}>
                <img src={element.image} alt={element.name} className = {styles.image}/>
                <div className={styles.price}><p>{element.price}</p>
                  <CurrencyIcon type='primary' />
                </div>
                <p className= {styles.part}>{element.name}</p>
              </div>
            </div>
        })}
      </section>
    </div>
  )
}