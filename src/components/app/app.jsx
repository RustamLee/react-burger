import React from 'react';
import { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import styles from './app.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import ModalOverlay from '../modal-overlay/modal-overlay';
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-detail/ingredient-detail';
import OrderDetails from '../order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsThunk } from '../../services/actions/ingredients';
import { getIngredientsDetails } from '../../services/actions/ingredient-details';
import { getOrderIdThunk } from '../../services/actions/order-details'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Login } from '../../pages/login';
import { Registration } from '../../pages/registration';
import { ForgotPassword } from '../../pages/forgot-password';
import { ResetPassword } from '../../pages/reset-password';
import { Profile } from '../../pages/profile';
import { IngredientPage } from '../../pages/ingredients'
import { Switch, Route, useLocation } from 'react-router-dom';
import { Main } from '../main/main';

export default function App() {
    const location = useLocation();
    let background = location.state && location.state.background;
    const ingredients = useSelector(store => store.ingredientsSet.ingredients);
    const dispatch = useDispatch();
    const items = useSelector(store => store.items.items);
    const bun = useSelector(store => store.items.bun);
    const idSet = [...items, ...bun].map(element => element._id);

    React.useEffect(() => {
        dispatch(getIngredientsThunk())
    }, [])

    const [element, setElement] = React.useState({});
    const [isOpen, setOpen] = React.useState(false);

    const burgerIngredientOpen = (event, element) => {
        setElement(element);
        dispatch(getIngredientsDetails(element));
        setOpen(!isOpen);
    }
    const closeModal = () => {
        setOpen(!isOpen);
    }
    const orderOpen = () => {
        setElement(null);
        dispatch(getOrderIdThunk(idSet));
        setOpen(!isOpen);
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <AppHeader />
            <Switch location={background || location}>
                <Route path='/login' exact={true}>
                    <Login />
                </Route>
                <Route path='/register' exact={true}>
                    <Registration />
                </Route>
                <Route path='/forgot-password' exact={true}>
                    <ForgotPassword />
                </Route>
                <Route path='/reset-password' exact={true}>
                    <ResetPassword />
                </Route>
                <Route path='/profile' exact={true}>
                    <Profile />
                </Route>
                <Route path='/ingredients/:id'>
                    <IngredientPage></IngredientPage>
                </Route>

                <Route path='/' exact={true}>
                    <Main burgerIngredientOpen={burgerIngredientOpen}
                        orderOpen={orderOpen} />
                </Route>
                {isOpen ? (<Modal closeModal={closeModal} onClick={closeModal}>
                    {element ? <IngredientDetails element={element} />
                        : <OrderDetails />}
                </Modal>)
                    : null}
                <Route path='*'>
                    {/* <Page404></Page404> */}
                </Route>
            </Switch>
        </DndProvider>
    )
}
