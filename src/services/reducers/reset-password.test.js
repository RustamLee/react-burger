import {
  initialState as state,
  reduceSetPassword as reducer
} from './reset-password';

import { setNewPassword } from '../actions/reset-password';

describe('test reset password', () => {
  it('should reset', () => {
    expect(reducer(state, setNewPassword())).toEqual({
      ...state,
      success: true
    })
  })
})
