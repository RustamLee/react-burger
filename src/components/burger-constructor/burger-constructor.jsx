import React from "react";
import styles from './burger-constructor.module.css';
import { ConstructorElement, Button, DragIcon, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import {doIngredient, deleteIngredient} from '../../services/actions/constructor';


BurgerConstructor.propTypes = {orderOpen: PropTypes.func.isRequired}

export default function BurgerConstructor({orderOpen}) {
  const img = 'https://code.s3.yandex.net/react/code/bun-02.png';

  return (
    <div className={styles.constructor}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '100px', height: '66vh' }}>
        <div className={styles.bun}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text=""
            price={20}
            thumbnail={img}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className={styles.main}>
          <div>
            <DragIcon type="primary" className={styles.drag} />
            <ConstructorElement
              text=""
              price= {20}
              thumbnail={img}
            />
          </div>
        </div>
        <div className={styles.bun}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text=""
            price={20}
            thumbnail={img}
          />
        </div>
      </div>
      <div className={styles.button}>
        <div>
          <div className={styles.total}>
            <p className="text text_type_digits-medium mr-3">610</p>
            <CurrencyIcon type='primary' />
          </div>
        </div>
      <Button type="primary" size="medium" onClick={orderOpen}>Оформить заказ</Button>
      </div>
    </div>
  )
}