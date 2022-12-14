import React from "react";
import styles from './profile-feed-details.module.css';
import { useSelector} from '../../utils/types';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { nanoid } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";

export default function ProfileFeedDetails() {

    const id  = useLocation().pathname.split('/')[3];
    const { orders } = useSelector(store => store.userSocket);
    
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
                <p className={`${styles.status}  text text_type_main-small mb-8}`}>{order?.status === 'done' && "Выполнено"}
                </p>
                <p className={`${styles.ingredients} text text_type_main-medium mb-4}`}>Состав:</p>
                <div>
                    <ul className={styles.box}>
                        {ingredients.filter((item) => order?.ingredients.includes(item._id)).map(item => {
                            return <li className={`${styles.element} mt-4}`} key={item._id}>
                            <div className={styles.element__image}>
                                <div style={{ backgroundImage: `url(${item.image_mobile})` }} className={styles.image} key={item.key}></div>
                                <p className={`text text_type_main-default`}>{item.name}</p>
                            </div>
                            <div className={styles.summ}>
                            <p className={`text text_type_digits-default`}>{filteredElements?.filter(i => i._id === item._id).length}&nbsp;x&nbsp;</p>
                                <span className={`text text_type_digits-default mr-2`}>{item.price}</span>
                                <CurrencyIcon type='primary' />
                            </div>
                        </li>
                        })}
                    </ul>
                </div>
                <div className={styles.price}>
                        <span className={`text text_type_digits-default mr-2`} >{array}&nbsp;</span>
                        <CurrencyIcon type='primary' />
                </div>
            </section>
        </div>}</>
    )
}
