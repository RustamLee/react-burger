import {
  initialState as state,
  reduceNewPassword as reducer
} from './recover-password';

import { getNewPassword } from '../actions/recover-password'

describe('test recover password', () => {
  it('should be recover', () => {
    expect(reducer(state, getNewPassword())).toEqual({
      ...state,
      success: true
    })
  })

})
