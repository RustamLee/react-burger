
import {GET_INGREDIENTS_SUCCESS} from '../actions/ingredients';

const initialState = {ingredients: []};

export function reduceIngredients (state= initialState, action) {
    switch (action.type) {
        case GET_INGREDIENTS_SUCCESS: {
            return {
            ...state, 
            ingredients: action.data,    
            }
        }
        default: {
            return state;
        }
    }
}