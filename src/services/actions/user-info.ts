import { apiConfig } from "../../utils/burger.config";
import { checkResponse } from '../../utils/burger.config';
import { getCookie } from "../../utils/coockie";
import { refresh } from "../../utils/refresh";
import { AppThunk } from "../../utils/types";
export const GET_USER_INFO: 'GET_USER_INFO' = 'GET_USER_INFO';
export const PATCH_USER_INFO: 'PATCH_USER_INFO' = 'PATCH_USER_INFO';


type TUser = {
  email: string,
  name: string,
  password?: string
}
interface IGetUserInfo {
  readonly type: typeof GET_USER_INFO
  payload: {
    email: string,
    name: string,
    password?: string
  }
}

interface IPatchUserInfo {
  readonly type: typeof PATCH_USER_INFO
  payload: {
    email: string,
    name: string,
    password?: string
  }
}

export type TUserInfo =
  | IGetUserInfo
  | IPatchUserInfo

export const getUserInfo = (payload: TUser) => ({
  type: GET_USER_INFO,
  payload
});
export const patchUserInfo = (payload: TUser) => ({
  type: PATCH_USER_INFO,
  payload
});

export const getUserInfoThunk: AppThunk = () => {
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
export const patchUserInfoThunk: AppThunk = (data: {
  name: string
  email: string
  password: string
}) => {
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


