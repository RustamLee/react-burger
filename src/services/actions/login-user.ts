
import { apiConfig } from "../../utils/burger.config";
import { checkResponse } from '../../utils/burger.config'
import { setCookie, getCookie, deleteCookie } from "../../utils/coockie";
import { AppThunk } from "../../utils/types";
export const LOGIN_USER: 'LOGIN_USER' = 'LOGIN_USER';
export const LOGOUT_USER: 'LOGOUT_USER' = 'LOGOUT_USER';

interface ILoginUser {
  readonly type: typeof LOGIN_USER
  email: string,
  password: string

}
interface ILogoutUser {
  readonly type: typeof LOGOUT_USER
}

export type TLoginUser =
  | ILoginUser
  | ILogoutUser

export const loginUser = (
  email: string,
  password: string
): ILoginUser => ({
  type: LOGIN_USER,
  email,
  password
})
export const logoutUser = (): ILogoutUser => ({
  type: LOGOUT_USER,

})

export const loginUserThunk: AppThunk = (email: string, password: string) => {

  return (dispatch) => {

    fetch(`${apiConfig.baseUrl}${apiConfig.login}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(checkResponse)
      .then(({ success, accessToken, refreshToken }) => {
        if (success) {
          setCookie('accessToken', accessToken.split('Bearer ')[1]);
          setCookie('refreshToken', refreshToken);
          dispatch(loginUser(email, password));
          // console.log(getCookie('accessToken'))
        }
      })
      .catch((err) => console.log(err))
  }
}
export const logoutUserThunk: AppThunk = () => {

  return (dispatch) => {

    fetch(`${apiConfig.baseUrl}${apiConfig.logout}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: getCookie('refreshToken')
      })
    })
      .then(checkResponse)
      .then(({ success }) => {
        if (success) {
          deleteCookie('accessToken');
          deleteCookie('refreshToken');
          dispatch(logoutUser());
        }
      })
      .catch((err) => console.log(err))
  }
}
