import React from "react";
import styles from './burger-ingredients.module.css'
import Tab from "../tabs/tab";
import PropTypes from 'prop-types';
import {burgerIngredientType} from '../../utils/types';
import {useSelector} from 'react-redux';
import {Ingredient} from '../ingredient/ingredient'

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(burgerIngredientType).isRequired,
  burgerIngredientOpen: PropTypes.func.isRequired
}

export default function BurgerIngredients({ burgerIngredientOpen }) {
  const ingredients = useSelector(store => store.ingredientsSet.ingredients);
  
  return (
    <div className={styles.ingredients}>
      <h1 className={`${styles.title} text text_type_main-large`}>Соберите бургер</h1>
      <Tab />
      <div className={styles.container}>
        <h2 className={`${styles.title} text text_type_main-medium mt-10`}>Булки</h2>
        <section className={styles.ingredient}>
          {ingredients && ingredients.map((element) => {
            if (element.type === 'bun')
              return <Ingredient key={element._id} burgerIngredientOpen={burgerIngredientOpen} element={element}/>
          }
          )}
        </section>
        <h2 className={`${styles.title} text text_type_main-medium mt-10`}>Соусы</h2>
        <section className={styles.ingredient}>
          {ingredients && ingredients.map((element) => {
            if (element.type === 'sauce')
              return <Ingredient key={element._id} burgerIngredientOpen={burgerIngredientOpen} element={element}/>
          }
          )}
        </section>
        <h2 className={`${styles.title} text text_type_main-medium mt-10`}>Начинки</h2>
        <section className={styles.ingredient}>
          {ingredients && ingredients.map((element) => {
            if (element.type === 'main')
              return <Ingredient key={element._id} burgerIngredientOpen={burgerIngredientOpen} element={element}/> 
          })}
        </section>
      </div>

    </div>
  )
}