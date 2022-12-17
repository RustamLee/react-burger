import {
  WS_USER_CONNECTION_INITIAL,
  WS_USER_CONNECTION_OPEN,
  WS_USER_CONNECTION_CLOSE,
  WS_USER_GET_ORDERS
} from '../actions/user-socket'
import { TOrder } from '../../utils/types'
import { TUnionAction } from '../actions'

type TInitialState = {
  success: boolean,
  connect: boolean,
  orders: Array<TOrder> | [],
  total: number | null
  totalToday: number | null
}
const initialState: TInitialState = {
  success: false,
  connect: false,
  orders: [],
  total: null,
  totalToday: null
}

export const userSocketReducers = (state = initialState, action: TUnionAction): TInitialState => {
  switch (action.type) {
    case WS_USER_CONNECTION_INITIAL: {
      return {
        ...state,
        success: true
      }
    }
    case WS_USER_CONNECTION_OPEN: {
      return {
        ...state,
        connect: true,
      }
    }
    case WS_USER_CONNECTION_CLOSE: {
      return {
        ...state,
        connect: false

      }
    }
    case WS_USER_GET_ORDERS: {
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday
      }
    }
    default: return state;
  }
}
