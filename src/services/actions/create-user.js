
import { apiConfig } from "../../utils/burger.config";
import { checkResponse } from '../../utils/burger.config'
import { setCookie, getCookie } from "../../utils/coockie";
export const CREATE_USER = 'CREATE_USER';

export const createUser = (payload) => ({
  type: CREATE_USER,
  payload
})

export const createUserThunk = (email, password, name) => {
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
          // console.log(getCookie('accessToken'))
        }
      })
      .catch((err) => console.log(err))
  }
}
