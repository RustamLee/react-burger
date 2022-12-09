import {
  GET_USER_INFO,
  PATCH_USER_INFO
} from '../actions/user-info';
import { TUnionAction } from '../actions';
const initialState = {
  user: {
    userEmail: "",
    userName: ""
  }
}

export function reduceUserInfo(state = initialState, action: TUnionAction) {
  switch (action.type) {
    case GET_USER_INFO: {
      return {
        ...state,
        user: {
          userEmail: action.payload.email,
          userName: action.payload.name
        }
      }
    }
    case PATCH_USER_INFO: {
      return {
        ...state,
        user: {
          userEmail: action.payload.email,
          userName: action.payload.name
        }
      }
    }
    default: {
      return state;
    }
  }
};
