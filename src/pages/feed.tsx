
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './feed.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
 
export function Feed() {
    return (
        <>
            <h1 className={`${styles.title} text text_type_main-large`}>Соберите бургер</h1>
            <div className={styles.feed}>
                <section>
                    <ul className={styles.cards}>
                        <li className={styles.card}>
                            <p className={styles.data}>
                                <span className='text text_type_digits-default'># order</span>
                                <span className='text text_type_main-default text_color_inactive'>Дата</span>
                            </p>
                            <p className='text text_type_main-medium mt-6'>Название бургера</p>
                            <div className={styles.total}>
                                <div className={styles.image}>
                                </div>
                                <p className={styles.price}>
                                <span className='text text_type_digits-default'>Price</span>&nbsp;&nbsp;
                                <CurrencyIcon type='primary'/>
                                </p>
                            </div>
                        </li>
                        <li className={styles.card}>
                            <p className={styles.data}>
                                <span className='text text_type_digits-default'># order</span>
                                <span className='text text_type_main-default text_color_inactive'>Дата</span>
                            </p>
                            <p className='text text_type_main-medium mt-6'>Название бургера</p>
                            <div className={styles.total}>
                                <div className={styles.image}>
                                </div>
                                <p className={styles.price}>
                                <span className='text text_type_digits-default'>Price</span>&nbsp;&nbsp;
                                <CurrencyIcon type='primary'/>
                                </p>
                            </div>
                        </li>
                        <li className={styles.card}>
                            <p className={styles.data}>
                                <span className='text text_type_digits-default'># order</span>
                                <span className='text text_type_main-default text_color_inactive'>Дата</span>
                            </p>
                            <p className='text text_type_main-medium mt-6'>Название бургера</p>
                            <div className={styles.total}>
                                <div className={styles.image}>
                                </div>
                                <p className={styles.price}>
                                <span className='text text_type_digits-default'>Price</span>&nbsp;&nbsp;
                                <CurrencyIcon type='primary'/>
                                </p>
                            </div>
                        </li>    
                    </ul>
                </section>
                <section className={styles.stats}>
                    <div className={styles.status}>
                        <p className='text text_type_main-medium pb-6'>Готовы:</p>
                        <p className='text text_type_main-medium pb-6'>В работе:</p>
                        <ul className={styles.table}>
                            <li className={`${styles.ready} text text_type_digits-default pb-2`}>123456</li>
                        </ul>
                        <ul className={styles.table}>
                            <li className={`${styles.order} text text_type_digits-default pb-2`}>123456</li>
                        </ul>
                    </div>
                    <p className={`${styles.summary} text text_type_main-medium pb-6`}>Выполнено за все время:
                    </p>   
                         <p className='text text_type_digits-large'>123</p>
                    <p className={`${styles.summary} text text_type_main-medium pb-6`}>Выполнено за сегодня:</p>
                    <p className='text text_type_digits-large'>123</p>
                </section>
            </div>
        </>
    )
}
