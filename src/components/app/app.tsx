import React from 'react';
import AppHeader from "../app-header/app-header";
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-detail/ingredient-detail';
import OrderDetails from '../order-details/order-details';
import { useDispatch, useSelector } from '../../utils/types';
import { getIngredientsThunk } from '../../services/actions/ingredients';
import { getOrderIdThunk } from '../../services/actions/order-details'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Login } from '../../pages/login';
import { Registration } from '../../pages/registration';
import { ForgotPassword } from '../../pages/forgot-password';
import { ResetPassword } from '../../pages/reset-password';
import { Profile } from '../../pages/profile';
import { Feed } from '../../pages/feed';
import { IngredientPage } from '../../pages/ingredients';
import { OrderPage } from '../../pages/profile-order';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { Main } from '../main/main';
import ProtectedRoute from '../protected-route/protected-route';
import FeedDetails from '../feed-details/feed-details';
import ProfileFeedDetails from '../profile-feed-details/profile-feed-details';
import { FeedPage } from '../../pages/feed-details';
import { ProfileFeedPage } from '../../pages/profile-feed-details';


type TLocation = ReturnType<typeof useLocation>;

export type TUseLocation = {
    [key: string]: string | null | TUseLocation | TLocation,
};

export default function App() {
    const { isLogged } = useSelector(state => state.login)
    const history = useHistory();
    const location = useLocation<TUseLocation>();
    const background = location.state && location.state.background;
    const dispatch = useDispatch();
    const items = useSelector(store => store.items.items);
    const bun = useSelector(store => store.items.bun);
    const idSet = [...items, ...bun].map(element => element._id);

    React.useEffect(() => {
        dispatch(getIngredientsThunk())
    }, [])

    const [isOpen, setOpen] = React.useState(false);


    const closeModal = () => {
        setOpen(false);
        if(!isOpen)
        history.push({
            ...location.state.background as TLocation | TUseLocation,
            state: { background: null }
        });
    }
    const orderOpen = React.useCallback(() => {
        if (!isLogged) {
            history.push(`/login`);
        }
        if (isLogged) {
            dispatch(getOrderIdThunk(idSet));
            setOpen(true);
        }

    }, [idSet, history, isLogged, dispatch])

    return (
        <DndProvider backend={HTML5Backend}>
            <AppHeader />
            <Switch location={background as TLocation || location}>
                <Route path='/ingredients/:id'>
                    <IngredientPage />
                </Route>
                <ProtectedRoute forAuth={false} path='/login' exact={true}>
                    <Login />
                </ProtectedRoute>
                <ProtectedRoute forAuth={false} path='/register' exact={true}>
                    <Registration />
                </ProtectedRoute>
                <ProtectedRoute forAuth={false} path='/forgot-password' exact={true}>
                    <ForgotPassword />
                </ProtectedRoute>
                <ProtectedRoute forAuth={false} path='/reset-password' exact={true}>
                    <ResetPassword />
                </ProtectedRoute>
                <ProtectedRoute forAuth={true} path='/profile' exact={true}>
                    <Profile />
                </ProtectedRoute>
                <Route path='/feed' exact={true}>
                    <Feed />
                </Route>
                <Route path='/feed/:id' exact={true}>
                    <FeedPage />
                </Route>
                <ProtectedRoute forAuth={true} path='/profile/orders' exact={true}>
                    <OrderPage />
                </ProtectedRoute>
                <ProtectedRoute forAuth={true} path='/profile/orders/:id' exact={true}>
                    <ProfileFeedPage />
                </ProtectedRoute>
                <Route path='/' exact={true}>
                    <Main
                        orderOpen={orderOpen} />
                </Route>
            </Switch>
                        
            {background && <Route path={`/feed/:id`}>
                <Modal closeModal={closeModal} onClick={closeModal}>
                    <FeedDetails />
                </Modal>
            </Route>}
            {background && <Route path={`/profile/orders/:id`}>
                <Modal closeModal={closeModal} onClick={closeModal}>
                    <ProfileFeedDetails />
                </Modal>
            </Route>}
            {background && <Route path={`/ingredients/:id`}>
                <Modal closeModal={closeModal} onClick={closeModal}>
                    <IngredientDetails />
                </Modal>
            </Route>}
            {isOpen && <Modal closeModal={closeModal} onClick={closeModal}>
                <OrderDetails />
            </Modal>}
        </DndProvider>
    )
}
