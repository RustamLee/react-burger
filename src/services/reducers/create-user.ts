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

type TInitialState ={
  success: boolean,
  user: {
    email: string,
    name: string,
  }
}

export function reduceCreateUser(state = initialState, action: TUnionAction): TInitialState {
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
