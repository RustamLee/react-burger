import { apiConfig } from "../../utils/burger.config";
import { checkResponse } from '../../utils/burger.config';
import { getCookie } from "../../utils/coockie";
import { refresh } from "../../utils/refresh";
export const GET_USER_INFO = 'GET_USER_INFO';
export const PATCH_USER_INFO = 'PATCH_USER_INFO';

export const getUserInfo = (payload) => ({
  type: GET_USER_INFO,
  payload
});
export const patchUserInfo = (payload) => ({
  type: PATCH_USER_INFO,
  payload
});

export const getUserInfoThunk = () => {
  return (dispatch) => {
    fetch(`${apiConfig.baseUrl}${apiConfig.user}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', authorization: 'Bearer ' + getCookie('accessToken') }

    })
      .then(checkResponse)
      .then(({ success, user }) => {
        if (success === true) {
          dispatch(getUserInfo(user))
        }
      })
      .catch((err) => {
        console.log(err)
        if (err === 'Ошибка 403') {
          refresh()
          getUserInfoThunk()
        }
        console.log(err)
      })
  }
}
export const patchUserInfoThunk = (data) => {
  const {
    email,
    name,
    password
  } = data;
  return (dispatch) => {
    fetch(`${apiConfig.baseUrl}${apiConfig.user}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', authorization: 'Bearer ' + getCookie('accessToken') },
      body: JSON.stringify({
        email,
        name,
        password
      })

    })
      .then(checkResponse)
      .then(({ success, user }) => {
        if (success === true) {
          dispatch(patchUserInfo(user))
        }
      })
      .catch((err) => {
        if (err === 'Ошибка 403') {
          refresh()
          getUserInfoThunk()
        }
        console.log(err)
      })
  }
}


