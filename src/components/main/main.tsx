
import styles from './main.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

type TMain = {
  orderOpen: () => void
}
export const Main = ({
  orderOpen
}: TMain) => {

  return (
    <main className={styles.mainsection}>
      <BurgerIngredients />
      <BurgerConstructor orderOpen={orderOpen} />
    </main>
  )
}
