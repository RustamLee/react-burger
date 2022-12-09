import React from "react";
import styles from './ingredient-detail.module.css';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

export default function IngredientDetails() {

    const { ingredients } = useSelector(store => store.ingredientsSet);
    const { id } = useParams();
    const element = ingredients.find(item => item._id === id);

    return (
        element && <div className={styles.details}>
            <h2 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h2>
            <img className={styles.image} src={element.image} alt={element.name} />
            <h3 className={`${styles.subtitle} text text_type_main-medium`}>{element.name}</h3>
            <ul className={styles.nutrition}>
                <li className={styles.listItem}>
                    <p className="text text_type_main-small">Калории, ккал</p>
                    <p className="text text_type_digits-default">{element.calories}</p>
                </li>
                <li className={styles.listItem}>
                    <p className="text text_type_main-small">Белки, г</p>
                    <p className="text text_type_digits-default">{element.proteins}</p>
                </li>
                <li className={styles.listItem}>
                    <p className="text text_type_main-small">Жиры, г</p>
                    <p className="text text_type_digits-default">{element.fat}</p>
                </li>
                <li className={styles.listItem}>
                    <p className="text text_type_main-small">Углеводы, г</p>
                    <p className="text text_type_digits-default">{element.carbohydrates}</p>
                </li>
            </ul>
        </div>
    )
}
