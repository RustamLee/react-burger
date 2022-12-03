
import styles from './main.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

export const Main = ({
  burgerIngredientOpen,
  orderOpen
}) => {

  return (
    <main className={styles.mainsection}>
      <BurgerIngredients burgerIngredientOpen={burgerIngredientOpen} />
      <BurgerConstructor orderOpen={orderOpen} />
    </main>
  )
}
