
import {GET_INGREDIENT_DETAILS} from '../actions/ingredient-details';

const initialState = {ingredient: {} };

export function reduceIngredientDetails (state = initialState, action) {
    switch (action.type) {
        case GET_INGREDIENT_DETAILS: {
            return {
            ...state, 
            ingredient: action.item,    
            }
        }
        default: {
            return state;
        }
    }
}