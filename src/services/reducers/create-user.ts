import {
  CREATE_USER,
} from '../actions/create-user';
import { TUnionAction } from '../actions';

const initialState = {
  success: false,
  user:
  {
    email: '',
    name: ''
  }
};

export function reduceCreateUser(state = initialState, action: TUnionAction) {
  switch (action.type) {
    case CREATE_USER: {
      return {
        ...state,
        user: action.payload,
        success: true
      }
    }
    default: {
      return state;
    }
  }
};
