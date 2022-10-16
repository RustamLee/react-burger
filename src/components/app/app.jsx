import React from 'react';
import { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import { apiConfig } from "../burger.config";
import styles from './app.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
export default function App() {
    const [ingredients, setIngredients] = React.useState([]);
    React.useEffect(() => {
        fetch(apiConfig.baseUrl)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(({ success, data }) => {
                if (success === true) {
                    setIngredients(data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <AppHeader />
            <div className= {styles.mainsection}>
            <BurgerIngredients ingredients={ingredients}/>
            </div>
            
        </>
    )
}