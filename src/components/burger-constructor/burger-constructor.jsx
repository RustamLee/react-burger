import React from "react";
import styles from './burger-constructor.module.css';
import {ConstructorElement, Button, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export default function BurgerConstructor () {
const img = 'https://code.s3.yandex.net/react/code/bun-02.png';
    return (
        <div className = {styles.constructor}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={img}
      />
      <div>
      <DragIcon />
      <ConstructorElement
        text="Краторная булка N-200i (верх)"
        price={50}
        thumbnail={img}
      />
      </div>
      <div>
      <DragIcon />
      <ConstructorElement
        text="Краторная булка N-200i (верх)"
        price={50}
        thumbnail={img}
      />
      </div>
      <div>
      <DragIcon />
      <ConstructorElement
        text="Краторная булка N-200i (верх)"
        price={50}
        thumbnail={img}
      />
      </div>
      <div>
      <DragIcon />
      <ConstructorElement
        text="Краторная булка N-200i (верх)"
        price={50}
        thumbnail={img}
      />
      </div>
      <div>
      <DragIcon />
      <ConstructorElement
        text="Краторная булка N-200i (верх)"
        price={50}
        thumbnail={img}
      />
      </div>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={img}
      />
    </div>
            <Button type="primary" size="medium">Оформить заказ</Button>
        </div>
    )

}