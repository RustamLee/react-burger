import {
  initialState as state,
  reduceLoginUser as reducer
} from './login-user'
import {
  loginUser,
  logoutUser
} from '../actions/login-user'

import { createUserData } from '../../utils/test-constants'

describe('login user test', () => {
  it('should be logged in', () => {
    expect(reducer(state, loginUser(createUserData))).toEqual({
      ...state,
      isLogged: true
    })
  })
  it('should be logout', () => {
    expect(reducer({isLogged: true}, logoutUser())).toEqual({
      isLogged: false
    })
  })
})
