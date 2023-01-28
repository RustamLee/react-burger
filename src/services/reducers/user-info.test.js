import {
  initialState as state,
reduceUserInfo as reducer
} from './user-info'

import {
  getUserInfo,
patchUserInfo
} from '../actions/user-info'
import { createUserData, getUserData } from '../../utils/test-constants'

describe('get and patch user info test', () => {
  it('should be get info', () => {
    expect(reducer(state, getUserInfo(createUserData))).toEqual({
      user: getUserData
    })
  })
  it('should be patch info', () => {
    expect(reducer(state, patchUserInfo(createUserData))).toEqual({
      user: getUserData
    })
  })
})
