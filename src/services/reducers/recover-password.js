import {
  NEW_PASSWORD,
} from '../actions/recover-password';

const initialState = { success: false };

export function reduceNewPassword(state = initialState, action) {
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
