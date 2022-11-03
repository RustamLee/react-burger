import {reduceIngredients} from './ingredients';
import {combineReducers} from 'redux';
import {reduceIngredientDetails} from './ingredient-details';
import {reduceOrderDetails} from './order-details';
import {reduceItems} from './constructor';
import { selectTabsReducer } from './tabs'/*  */

export const mainReducer = combineReducers ({
    ingredientsSet: reduceIngredients,
    ingredientDetails: reduceIngredientDetails,
    items: reduceItems,
    orderDetail: reduceOrderDetails,
    tabs: selectTabsReducer,/*  */
});