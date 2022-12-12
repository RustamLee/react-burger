import {GET_ORDER_DETAILS} from '../actions/order-details';

import { TUnionAction } from '../actions';

const initialState = {id: ''};
type TInitialState = {
    id: string
}

export function reduceOrderDetails (state= initialState, action: TUnionAction): TInitialState {
    switch (action.type) {
        case GET_ORDER_DETAILS: {
            return {
            ...state, 
            id: action.id,    
            }
        }
        default: {
            return state;
        }
    }
};
