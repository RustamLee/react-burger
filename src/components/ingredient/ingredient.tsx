import React from "react";
import styles from './ingredient.module.css';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from 'react-dnd';
import { useSelector } from "../../utils/types";
import { useHistory, useLocation } from 'react-router-dom'
import { TItem } from "../../utils/types";

type TIngredient = {
  element: TItem
}

export function Ingredient({ element }: TIngredient) {
  const location = useLocation()
  const history = useHistory()
  const items = useSelector(store => store.items.items);
  const bun = useSelector(store => store.items.bun);
  const arr = [...items, ...bun, ...bun];
  const count = arr.filter(m => m._id === element._id).length;

  const [, drag] = useDrag(() => ({
    type: 'item',
    item: {
      id: element._id,
      element
    }
  }))
  const burgerIngredientOpen = React.useCallback((element: TItem) => {
    const { _id } = element;
    history.push({
      pathname: `/ingredients/${_id}`,
      state: { background: location }
    });

  }, [])



  return (
    <div className={styles.card} ref={drag}>
      {count > 0 && <div id={element._id}><Counter count={count} size="default" /> </div>}
      <img src={element.image} alt={element.name} className={styles.image} onClick={() => burgerIngredientOpen(element)} />
      <div className={styles.price}><p className="text text_type_digits-default mr-2">{element.price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <p className={`${styles.part} text text_type_main-default`}>{element.name}</p>
    </div>)
}
