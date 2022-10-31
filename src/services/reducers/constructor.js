import {
    DO_INGREDIENT,
    DELETE_INGREDIENT,
    DO_BUN
} from './../actions/constructor';

const initialState = {
    items: [],
    bun: []
};

export function reduceItems(state = initialState, action) {
    switch (action.type) {
        case DO_INGREDIENT: {
            return {
                ...state,
                items: action.item.type !== 'bun'
                    ? [...state.items, action.item]
                    : [...state.items]
            }
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.item.id)
            }
        }
        case DO_BUN: {
            return {
                ...state,
                bun: action.item.type !== 'bun'
                    ? state.bun : [action.item]
            }
        }
        default: {
            return state;
        }
    }
};
