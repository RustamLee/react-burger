import {reduceIngredients} from './ingredients';
import {combineReducers} from 'redux';
import {reduceIngredientDetails} from './ingredient-details';
import {reduceOrderDetails} from './order-details';
import {reduceItems} from './constructor';

//4 пункт
export const mainReducer = combineReducers ({
    ingredientsSet: reduceIngredients,
    ingredientDetails: reduceIngredientDetails,
    items: reduceItems,
    orderDetail: reduceOrderDetails,
});