import {
  GET_PASSWORD,
} from '../actions/reset-password';
import { TUnionAction } from '../actions';
const initialState = { success: false };

export function reduceSetPassword(state = initialState, action: TUnionAction) {
  switch (action.type) {
    case GET_PASSWORD: {
      return {
        ...state,
        success: true,
      }
    }
    default: {
      return state;
    }
  }
};
