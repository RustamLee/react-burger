import {
  initialState as state,
  reduceCreateUser as reducer
} from './create-user';
import { createUserData } from '../../utils/test-constants';

import { createUser } from '../actions/create-user'

describe('create user test', () => {
  it('should create new user', () => {
    expect(reducer(state, createUser(createUserData))).toEqual({
      ...state,
      success: true,
      user: {
        email: createUserData.email,
        name: createUserData.name
      }
     })
  })
});
