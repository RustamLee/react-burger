import React from 'react';
import styles from './burger-ingredients.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerIngredients({ ingredients }) {
        return (
                <>
                        {ingredients.map((item) => {
                               { console.log(item)}
return                               <div key = {item._id}>
                                        <img src = {item.image}/>
                                        <p>{item.name}</p>
                                        <div>
                                                <p>{item.price}<CurrencyIcon type="primary" /></p>
                                        </div>
                                </div>
                        })
                        }
                </>
        )
}