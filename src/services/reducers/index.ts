import { reduceIngredients } from './ingredients';
import { combineReducers } from 'redux';
import { reduceIngredientDetails } from './ingredient-details';
import { reduceOrderDetails } from './order-details';
import { reduceItems } from './constructor';
import { selectTabsReducer } from './tabs';/*  */
import { reduceNewPassword } from './recover-password';
import { reduceSetPassword } from './reset-password';
import { reduceCreateUser } from './create-user';
import { reduceLoginUser } from './login-user';
import { reduceUserInfo } from './user-info';
import { userSocketReducers } from './user-socket';
import { allSocketReducers } from './all-socket';

export const mainReducer = combineReducers({
    ingredientsSet: reduceIngredients,
    ingredientDetails: reduceIngredientDetails,
    items: reduceItems,
    orderDetail: reduceOrderDetails,
    tabs: selectTabsReducer,
    recover: reduceNewPassword,
    set: reduceSetPassword,
    user: reduceCreateUser,
    login: reduceLoginUser,
    userInfo: reduceUserInfo,
    allSocket: allSocketReducers,
    userSocket: userSocketReducers
    /*  */
});
