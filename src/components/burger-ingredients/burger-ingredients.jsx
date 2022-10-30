import React from "react";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients.module.css'
import Tab from "../tabs/tab";
import PropTypes from 'prop-types';
import {burgerIngredientType} from '../../utils/types';

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(burgerIngredientType).isRequired,
  burgerIngredientOpen: PropTypes.func.isRequired
}

export default function BurgerIngredients({ ingredients, burgerIngredientOpen }) {
  console.log(ingredients)
  return (
    <div className={styles.ingredients}>
      <h1 className={`${styles.title} text text_type_main-large`}>Соберите бургер</h1>
      <Tab />
      <div className={styles.container}>
        <h2 className={`${styles.title} text text_type_main-medium mt-10`}>Булки</h2>
        <section className={styles.ingredient}>
          {ingredients && ingredients.map((element) => {
            if (element.type === 'bun')
              return <div key={element._id}>
                <div className={styles.card}>
                  <div><Counter id={element._id} count={element.count} size="default" /></div>
                  <img src={element.image} alt={element.name} className={styles.image} onClick={(event) => burgerIngredientOpen(event, element)}/>
                  <div className={styles.price}><p className="text text_type_digits-default mr-2">{element.price}</p>
                    <CurrencyIcon type='primary' />
                  </div>
                  <p className={`${styles.part} text text_type_main-default`}>{element.name}</p>
                </div>
              </div>
          }
          )}
        </section>
        <h2 className={`${styles.title} text text_type_main-medium mt-10`}>Соусы</h2>
        <section className={styles.ingredient}>
          {ingredients && ingredients.map((element) => {
            if (element.type === 'sauce')
              return <div key={element._id}>
                <div className={styles.card}>
                  <div><Counter id={element._id} count={element.count} size="default" /></div>
                  <img src={element.image} alt={element.name} className={styles.image} onClick={(event) => burgerIngredientOpen(event, element)}/>
                  <div className={styles.price}><p className="text text_type_digits-default mr-2">{element.price}</p>
                    <CurrencyIcon type='primary' />
                  </div>
                  <p className={`${styles.part} text text_type_main-default`}>{element.name}</p>
                </div>
              </div>
          }
          )}
        </section>
        <h2 className={`${styles.title} text text_type_main-medium mt-10`}>Начинки</h2>
        <section className={styles.ingredient}>
          {ingredients && ingredients.map((element) => {
            if (element.type === 'main')
              return <div key={element._id}>
                <div className={styles.card}>
                  <div><Counter id={element._id} count={element.count} size="default" /></div>
                  <img src={element.image} alt={element.name} className={styles.image} onClick={(event) => burgerIngredientOpen(event, element)}/>
                  <div className={styles.price}><p className="text text_type_digits-default mr-2">{element.price}</p>
                    <CurrencyIcon type='primary' />
                  </div>
                  <p className={`${styles.part} text text_type_main-default`}>{element.name}</p>
                </div>
              </div>
          })}
        </section>
      </div>

    </div>
  )
}