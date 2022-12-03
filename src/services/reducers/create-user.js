import {
  CREATE_USER,
} from '../actions/create-user';

const initialState = { user: {
  email: '',
  name: ''
} };

export function reduceCreateUser(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER: {
      return {
        ...state,
        user: action.payload,
      }
    }
    default: {
      return state;
    }
  }
};
