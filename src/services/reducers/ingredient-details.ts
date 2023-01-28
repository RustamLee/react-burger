
import {GET_INGREDIENT_DETAILS} from '../actions/ingredient-details';
import { TUnionAction } from '../actions';

const initialState = {ingredient: {} };


export function reduceIngredientDetails (state = initialState, action: TUnionAction)  {
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
