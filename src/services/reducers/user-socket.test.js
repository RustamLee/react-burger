import {
  initialState as state,
  userSocketReducers as reducer
} from './user-socket'

import {
  userWsConnectionInitial,
  userWsConnectionOpen,
  userWsConnectionClose,
  userWsConnectionOrders
} from '../actions/user-socket'
import { testOrder } from '../../utils/test-constants';
import { apiConfig } from '../../utils/burger.config';

describe('user-socket test', () => {
  it('initial test', () => {
    expect(reducer({ ...state, success: false }, userWsConnectionInitial(apiConfig.userSocket))).toEqual({
      ...state,
      success: true
    })
  });
  it('open test', () => {
    expect(reducer({ ...state, connect: false }, userWsConnectionOpen())).toEqual({
      ...state,
      connect: true
    })
  });
  it('close test', () => {
    expect(reducer({ ...state, connect: true }, userWsConnectionClose())).toEqual({
      ...state,
      connect: false
    })
  });
  it('orders test', () => {
    expect(reducer({
      ...state, orders: [], total: null, totalToday: null
    }, userWsConnectionOrders(testOrder))).toEqual({
      ...state,
      orders: testOrder.orders,
      total: testOrder.total,
      totalToday: testOrder.totalToday
    })
  });
})
