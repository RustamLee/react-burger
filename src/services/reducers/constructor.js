import {DO_INGREDIENT , DELETE_INGREDIENT} from './../actions/constructor';

const initialState = {items: []};

export function reduceItems (state= initialState, action) {
    switch (action.type) {
        case DO_INGREDIENT: {
            return {
            ...state, 
            items: [...state.items, action.item]    
            }
        }
        case DELETE_INGREDIENT: {
            return {
                ...state, 
                items: state.items.filter(item => item.id !== action.item.id)
                }
        }
        default: {
            return state;
        }
    }
};
