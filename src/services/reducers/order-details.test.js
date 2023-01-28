import {
  initialState as state,
  reduceOrderDetails as reducer
} from './order-details'
import { testId} from '../../utils/test-constants';
import { getOrderId } from '../actions/order-details';

describe('order details test', () => {
  it ('shoud get id', () => {
    expect(reducer(state, getOrderId(testId))).toEqual({
      ...state,
      id: testId
    })
  })
})
