import {
  LOGIN_USER,
  LOGOUT_USER
} from '../actions/login-user';
import { getCookie } from '../../utils/coockie';
import { TUnionAction } from '../actions';
import { type } from 'os';

const initialState = {
  isLogged: !!getCookie('accessToken') ? true : false
};

export function reduceLoginUser(state = initialState, action: TUnionAction) {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        isLogged: true
      }
    }
    case LOGOUT_USER: {
      return {
        ...state,
        isLogged: false
      }
    }
    default: {
      return state;
    }
  }
};
