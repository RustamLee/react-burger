import React from 'react';
import { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import { apiConfig } from "../burger.config";
import styles from './app.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import ModalOverlay from '../modal-overlay/modal-overlay';
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-detail/ingredient-detail';
import OrderDetails from '../order-details/order-details';



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
    const [element, setElement] = React.useState({});
    const [isOpen, setOpen] = React.useState(false);
    const burgerIngredientOpen = (event, element) => {
        setElement(element);
        console.log(element)
        setOpen(!isOpen);
    }
    const closeModal =()=>{
        setOpen(!isOpen);
    }
    const orderOpen = () =>{
        setElement (null);
        setOpen(!isOpen);
    }
        return (
        <>
            <AppHeader />
            <main className={styles.mainsection}>
                <div>
                    <BurgerIngredients ingredients={ingredients} burgerIngredientOpen={burgerIngredientOpen}/>
                </div>
                <div>
                    <BurgerConstructor orderOpen={orderOpen}/>
                </div>
            </main>
            {isOpen? <Modal closeModal={closeModal} onClick={closeModal}>
                { element?<IngredientDetails element={element}/>
                :<OrderDetails/>}
            </Modal>
            : null}
        </>
    )
}