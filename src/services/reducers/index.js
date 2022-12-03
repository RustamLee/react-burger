import { reduceIngredients } from './ingredients';
import { combineReducers } from 'redux';
import { reduceIngredientDetails } from './ingredient-details';
import { reduceOrderDetails } from './order-details';
import { reduceItems } from './constructor';
import { selectTabsReducer } from './tabs';/*  */
import { reduceNewPassword } from './recover-password';
import { reduceSetPassword } from './reset-password';
import { reduceCreateUser } from './create-user'

export const mainReducer = combineReducers({
    ingredientsSet: reduceIngredients,
    ingredientDetails: reduceIngredientDetails,
    items: reduceItems,
    orderDetail: reduceOrderDetails,
    tabs: selectTabsReducer,
    recover: reduceNewPassword,
    set: reduceSetPassword,
    user: reduceCreateUser
    /*  */
});
