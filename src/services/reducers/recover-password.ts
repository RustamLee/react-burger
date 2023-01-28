import {
  NEW_PASSWORD,
} from '../actions/recover-password';
import { TUnionAction } from '../actions';

const initialState = { success: false };
type TInitialState = {
  success: boolean,
}

export function reduceNewPassword(state = initialState, action: TUnionAction): TInitialState {
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
