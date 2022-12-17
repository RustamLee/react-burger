import {
  WS_CONNECTION_INITIAL,
  WS_CONNECTION_OPEN,
  WS_CONNECTION_CLOSE,
  WS_GET_ORDERS
} from '../actions/all-socket'
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

export const allSocketReducers = (state = initialState, action: TUnionAction): TInitialState => {
  switch (action.type) {
    case WS_CONNECTION_INITIAL: {
      return {
        ...state,
        success: true
      }
    }
    case WS_CONNECTION_OPEN: {
      return {
        ...state,
        connect: true,
      }
    }
    case WS_CONNECTION_CLOSE: {
      return {
        ...state,
        connect: false

      }
    }
    case WS_GET_ORDERS: {
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
