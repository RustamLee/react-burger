import {GET_ORDER_DETAILS} from '../actions/order-details';

const initialState = {id: ''};

export function reduceOrderDetails (state= initialState, action) {
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