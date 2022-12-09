import {
  NEW_PASSWORD,
} from '../actions/recover-password';
import { TUnionAction } from '../actions';
const initialState = { success: false };

export function reduceNewPassword(state = initialState, action: TUnionAction) {
  switch (action.type) {
    case NEW_PASSWORD: {
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
