import {
    DO_INGREDIENT,
    DELETE_INGREDIENT,
    DO_BUN,
    MOVE_INGREDIENT,
} from '../actions/constructor';
import { TItem } from '../../utils/types';
import { TUnionAction } from '../actions';
import update from 'immutability-helper';


type TInitialState = {
    items: Array<TItem> | [],
    bun: Array<TItem> | []
}

const initialState: TInitialState = {
    items: [],
    bun: []
};

export function reduceItems(state = initialState, action: TUnionAction): TInitialState {
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
        case MOVE_INGREDIENT: {
            return {
                ...state,
                items: update(state.items, {
                    $splice: [
                        [action.dragIndex, 1],
                        [action.hoverIndex, 0, state.items[action.dragIndex]],
                    ],
                }),
            }
        }

        default: {
            return state;
        }
    }
};
