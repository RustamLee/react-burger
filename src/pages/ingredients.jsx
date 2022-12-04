import React from 'react';
import styles from './ingredients.module.css';
import IngredientDetails from '../components/ingredient-detail/ingredient-detail'

export function IngredientPage(){
    
    return (
        <div className={styles.details}>
            <IngredientDetails />
        </div>
    )
}
