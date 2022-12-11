import React from "react";
import styles from './feed-detail.module.css';
import { useSelector } from '../../utils/types';
import { useParams } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";


export default function FeedDetails() {

    return (
         <div className={styles.details}>
            <section>
                <p className={`text text_type_digits-default mt-6 mb-8`}># Order</p>
                <p className={`text text_type_main-medium mb-3`}>Бургер</p>
                <p className={`text text_type_main-small mb-8}`}>Статус</p>
                <p className="text text_type_main-medium mb-4">Состав:</p>
                <div>
                    <ul>
                            <li className={`mt-4`}>
                                <div>
                                    <img/>
                                    <p className={`text text_type_main-small`}>Ингредиент</p>
                                </div>
                                <div>
                                    <span className={`text text_type_digits-default mr-2`}>Цена</span>
                                    <CurrencyIcon type='primary' />
                                </div>
                            </li>
                    </ul>
                </div>
                <div>
                    <span className={`text text_type_main-default text_color_inactive ml-2`}></span>
                    <p className={`text text_type_digits-default`}>
                        <span className={`mr-2`}>Сумма</span>
                        <CurrencyIcon type='primary' />
                    </p>
                </div>
            </section>
        </div>
    )
}