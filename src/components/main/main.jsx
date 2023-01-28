
import styles from './main.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

export const Main = ({
  orderOpen
}) => {

  return (
    <main className={styles.mainsection}>
      <BurgerIngredients />
      <BurgerConstructor orderOpen={orderOpen} />
    </main>
  )
}
