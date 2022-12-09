
import { GET_INGREDIENTS_SUCCESS } from '../actions/ingredients';
import { TUnionAction } from '../actions';
import { TItem } from '../../utils/types';

type TInitialState = {
    ingredients: Array<TItem> | [] 
}
const initialState: TInitialState = { ingredients: [] };

export function reduceIngredients(state = initialState, action: TUnionAction) {
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
