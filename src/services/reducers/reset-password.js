import {
  GET_PASSWORD,
} from '../actions/reset-password';

const initialState = { success: false };

export function reduceSetPassword(state = initialState, action) {
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
