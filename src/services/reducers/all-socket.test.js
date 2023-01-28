import {
  initialState as state,
  allSocketReducers as reducer
} from './all-socket'
import {
  wsConnectionInitial,
  wsConnectionOpen,
  wsConnectionClose,
  wsConnectionOrders
} from '../actions/all-socket'
import { apiConfig } from '../../utils/burger.config'
import { testOrder } from '../../utils/test-constants'

describe('all-socket test', () => {
  it('initial test', () => {
    expect(reducer({ ...state, success: false }, wsConnectionInitial(apiConfig.socket))).toEqual({
      ...state,
      success: true
    })
  });
  it('open test', () => {
    expect(reducer({ ...state, connect: false }, wsConnectionOpen())).toEqual({
      ...state,
      connect: true
    })
  });
  it('close test', () => {
    expect(reducer({ ...state, connect: true }, wsConnectionClose())).toEqual({
      ...state,
      connect: false
    })
  });
  it('orders test', () => {
    expect(reducer({ ...state, orders: [], total: null, totalToday: null }, wsConnectionOrders(testOrder))).toEqual({
      ...state,
      orders: testOrder.orders,
      total: testOrder.total,
      totalToday: testOrder.totalToday
    })
  });



})
