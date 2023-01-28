
import { apiConfig } from "../../utils/burger.config";
import { checkResponse } from '../../utils/burger.config'
import { setCookie, getCookie, deleteCookie } from "../../utils/coockie";
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload
})
export const logoutUser = () => ({
  type: LOGOUT_USER,

})

export const loginUserThunk = (email, password) => {

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
          dispatch(loginUser());
          // console.log(getCookie('accessToken'))
        }
      })
      .catch((err) => console.log(err))
  }
}
export const logoutUserThunk = () => {

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
