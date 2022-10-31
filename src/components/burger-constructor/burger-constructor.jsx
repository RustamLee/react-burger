import React from "react";
import styles from './burger-constructor.module.css';
import { ConstructorElement, Button, DragIcon, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { doIngredient, deleteIngredient, addBun } from '../../services/actions/constructor';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

BurgerConstructor.propTypes = { orderOpen: PropTypes.func.isRequired }

export default function BurgerConstructor({ orderOpen }) {

  const dispatch = useDispatch();
  const items = useSelector(store => store.items.items);
  const bun = useSelector(store => store.items.bun);
  const totalList = [...items, ...bun, ...bun];
  const constructorPrice = totalList.length > 0 ? totalList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0) : 0;
  const [, drop] = useDrop(() => ({
    accept: 'item',
    drop: (item) => addIngredient(item.element)
  }));

  const addIngredient = (item) => {
    item = { ...item, id: nanoid() }
    dispatch(doIngredient(item));
    dispatch(addBun(item));
  }


  return (
    <div className={styles.constructor} ref={drop}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '100px', height: '66vh' }}>
        <div className={styles.bun}>
          {bun.map(item => item.type === 'bun' ? <ConstructorElement
            key={item.id}
            id={item.id}
            type="top"
            isLocked={true}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
          /> : null)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className={styles.main}>
          {items.map(item => item.type !== 'bun' ? <div key={item.id} >
            <DragIcon type="primary" className={styles.drag} />
            <ConstructorElement
              id={item.id}
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
          </div> : null)}
        </div>
        <div className={styles.bun}>
          {bun.map(item => item.type === 'bun' ? <ConstructorElement
            key={item.id}
            id={item.id}
            type="bottom"
            isLocked={true}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
          /> : null)}
        </div>
      </div>
      <div className={styles.button}>
        <div>
          <div className={styles.total}>
            <p className="text text_type_digits-medium mr-3">{constructorPrice}</p>
            <CurrencyIcon type='primary' />
          </div>
        </div>
        <Button type="primary" size="medium" onClick={orderOpen}>Оформить заказ</Button>
      </div>
    </div>
  )
}