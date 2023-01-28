import {GET_ORDER_DETAILS} from '../actions/order-details';

import { TUnionAction } from '../actions';

type TInitialState = {
    id: string
}
const initialState: TInitialState = {id: ''};

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
