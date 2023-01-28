import React from "react";
import styles from './burger-constructor.module.css';
import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { doIngredient, deleteIngredient, addBun } from '../../services/actions/constructor';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from '../../utils/types';
import { nanoid } from 'nanoid';
import { InsideElement } from '../inside-element/inside-element';
import { TItem } from "../../utils/types";

type TBurgerConstructor = {
  orderOpen: () => void
}
type TIngredient = {
  element: TItem
}


export default function BurgerConstructor({ orderOpen }: TBurgerConstructor) {

  const deleteElement = (element: TItem) => {
    dispatch(deleteIngredient(element))
  };
  const dispatch = useDispatch();
  const items = useSelector(store => store.items.items);
  const bun = useSelector(store => store.items.bun);
  const totalList = [...items, ...bun, ...bun];
  const constructorPrice = totalList.length > 0 ? totalList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0) : 0;
  const [, drop] = useDrop(() => ({
    accept: 'item',
    drop: (item: TIngredient) => addIngredient(item.element)
  }));

  const addIngredient = (item: TItem) => {
    item = { ...item, id: nanoid() }
    dispatch(doIngredient(item));
    dispatch(addBun(item));
  }

  return (
    <div className={styles.container} ref={drop}>
      <div className={styles.burgerConstructor} >
        <div className={styles.bun}>
          {bun.map(item => item.type === 'bun' ? <ConstructorElement
            key={item.id}
            type="top"
            isLocked={true}
            text={`${item.name} (верх)`}
            price={item.price}
            thumbnail={item.image}
          /> : null)}
        </div>
        <div className={styles.main}>
          {items.map((item, index) => item.type !== 'bun' ? <InsideElement key={item.id} item={item} index={index} id={item.id} deleteElement={deleteElement} /> : null)}
        </div>
        <div className={styles.bun}>
          {bun.map(item => item.type === 'bun' ? <ConstructorElement
            key={item.id}
            type="bottom"
            isLocked={true}
            text={`${item.name} (низ)`}
            price={item.price}
            thumbnail={item.image}
          /> : null)}
        </div>
      </div>
      {items.length || bun.length
        ? <div className={styles.button}>
          <div className={styles.total}>
            <p className="text text_type_digits-medium mr-3">{constructorPrice}</p>
            <CurrencyIcon type='primary' />
          </div>
          <Button htmlType="submit" type="primary" size="medium" onClick={orderOpen}>Оформить заказ</Button>
        </div>
        : null}
    </div>
  )
}
