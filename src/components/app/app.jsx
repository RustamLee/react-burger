import React from 'react';
import { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import { apiConfig } from "../burger.config";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

export default function App() {
    const [ingredients, setIngredients] = React.useState([]);

    useEffect(() => {
    fetch(apiConfig.baseUrl)
            .then((res)=>{
                if (res.ok){
                return res.json();    
                }
            })
            .then(({ success, data }) => {
                if (success === true) {
                    setIngredients([data])
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])
    return (
        <>
        <AppHeader />
        <BurgerIngredients ingredients = {ingredients}/>
        </>
    )
}