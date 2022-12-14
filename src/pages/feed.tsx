
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './feed.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { OrderCard } from '../components/order-card/order-card';
import { wsConnectionInitial, wsConnectionClose } from '../services/actions/all-socket';
import { useDispatch, useSelector } from '../utils/types';

export function Feed() {
    const location = useLocation()
    const dispatch = useDispatch()
    const { orders, total, totalToday } = useSelector(store => store.allSocket)
   
    React.useEffect(() => {
        dispatch(wsConnectionInitial())
    }, [])

    React.useEffect(() => {
        if (location.pathname !== '/feed') {
            dispatch(wsConnectionClose())
        }
    }, [dispatch, location])
    if (!orders) {
        return <></>
    }
    const doneOrders = orders.filter(order => order.status === 'done');
    const waitOrders = orders.filter(order => order.status !== 'done');


    return (
        <>
            <h1 className={`${styles.title} text text_type_main-large`}>Соберите бургер</h1>
            <div className={styles.feed}>
                <section className={styles.cards}>
                    {orders.map((card, index) => {
                        if (card)
                        return <OrderCard key={`${card._id}${index}`} 
                        number={card.number} name={card.name} 
                        createdAt={card.createdAt} status={card.status} elements={card.ingredients}/>
                    })}
                </section>
                <section className={styles.stats}>
                    <div className={styles.status}>
                        <p className='text text_type_main-medium pb-6'>Готовы:</p>
                        <p className='text text_type_main-medium pb-6'>В работе:</p>
                        <ul className={styles.table}>
                            {doneOrders.map((element, index) => {
                                if (index < 10)
                                    return <li className={`${styles.ready} text text_type_digits-default pb-2`} key={element._id}>{element.number}</li>
                            })}
                        </ul>
                        <ul className={styles.table}>
                            {waitOrders.map((element, index) => {
                                if (index < 10)
                                    return <li className={`${styles.order} text text_type_digits-default pb-2`} key={element._id}>{element.number}</li>
                            })}
                        </ul>
                    </div>
                    <p className={`${styles.summary} text text_type_main-medium pb-6`}>Выполнено за все время:
                    </p>
                    <p className='text text_type_digits-large'>{total}</p>
                    <p className={`${styles.summary} text text_type_main-medium pb-6`}>Выполнено за сегодня:</p>
                    <p className='text text_type_digits-large'>{totalToday}</p>
                </section>
            </div>
        </>
    )
}
