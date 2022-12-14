
import { apiConfig } from "../../utils/burger.config";
import { checkResponse } from '../../utils/burger.config'
import { setCookie, getCookie } from "../../utils/coockie";
import { AppThunk } from "../../utils/types";
export const CREATE_USER: 'CREATE_USER' = 'CREATE_USER';

interface ICreateUser {
  readonly type: typeof CREATE_USER
  payload: {
    email: string,
    password: string,
    name: string
  }
}

export type TCreateUserAction =
  | ICreateUser

export const createUser = (payload: {
  email: string,
  password: string,
  name: string
}): ICreateUser => ({
  type: CREATE_USER,
  payload
})

export const createUserThunk: AppThunk = (email: string, password: string, name: string) => {
  return (dispatch) => {

    fetch(`${apiConfig.baseUrl}${apiConfig.register}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        name
      })
    })
      .then(checkResponse)
      .then(({ success, user, accessToken, refreshToken }) => {
        if (success) {
          setCookie('accessToken', accessToken.split('Bearer ')[1]);
          setCookie('refreshToken', refreshToken);
          dispatch(createUser(user));
        }
      })
      .catch((err) => console.log(err))
  }
}
