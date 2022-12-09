import {
  GET_USER_INFO,
  PATCH_USER_INFO
} from '../actions/user-info';

const initialState = {
  user: {
    userEmail: "",
    userName: ""
  }
}

export function reduceUserInfo(state = initialState, action) {
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
