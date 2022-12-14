import React from "react";
import styles from './feed-details.module.css';
import { useSelector } from '../../utils/types';
import { useParams } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { nanoid } from "@reduxjs/toolkit";


export default function FeedDetails() {
    const { id } = useParams<{ id: string }>()

    const { orders } = useSelector(store => store.allSocket);
    const order = orders.find(element => element.number === Number(id));
    const { ingredients } = useSelector(store => store.ingredientsSet)

    const filteredElements = order?.ingredients.map((element) => {
        return ingredients.find(i => i._id === element)
    }).map((element) => ({ ...element, key: nanoid() }))

    const array = filteredElements?.reduce((acc, item) => {
        const { price } = item
        return acc + price!
    }, 0)

    return (
        <>{order && <div className={styles.details}>
            <section>
                <p className={`${styles.number} text text_type_digits-default mt-6 mb-8`}># {order?.number}</p>
                <p className={`${styles.name} text text_type_main-medium mb-3`}>{order?.name}</p>
                <p className={`${styles.status}  text text_type_main-small mb-8}`}>{order?.status}
                </p>
                <p className="text text_type_main-medium mb-4">Состав:</p>
                <div>
                    <ul className={styles.img}>
                        <li className={styles.ingredients}>
                            <div >
                                {filteredElements?.map((item, index) => {
                                    if (item && index < 5)
                                        return <div>
                                            <div className={styles.image} key={item.key}><img src={item.image_mobile} alt={item.name} /></div>
                                            <div className={styles.ingredients}>
                                                <p> ингредиент</p>
                                                <p> штук</p>
                                                <p> сумма</p>
                                            </div>
                                        </div>
                                })}
                            </div>
                            <div className={styles.summ}>
                                <span className={`text text_type_digits-default mr-2`}>Цена</span>
                                <CurrencyIcon type='primary' />
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <span className={`text text_type_main-default text_color_inactive ml-2`}></span>
                    <p className={`text text_type_digits-default`}>
                        <span className={`mr-2`}>{array}</span>
                        <CurrencyIcon type='primary' />
                    </p>
                </div>
            </section>
        </div>}</>
    )
}
