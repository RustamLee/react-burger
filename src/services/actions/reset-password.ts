
import { apiConfig } from "../../utils/burger.config";
import { checkResponse } from '../../utils/burger.config'
import { AppThunk } from "../../utils/types";
export const GET_PASSWORD: 'GET_PASSWORD' = 'GET_PASSWORD';

interface ISetNewPassword {
  readonly type: typeof GET_PASSWORD 
}

export type TSetNewPassword =
| ISetNewPassword

export const setNewPassword = ():ISetNewPassword => ({
  type: GET_PASSWORD,

})

export const setNewPasswordThunk: AppThunk = (password: string, token: string) => {
  return (dispatch) => {

    fetch(`${apiConfig.baseUrl}${apiConfig.reset}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password,
        token
      })
    })
      .then(checkResponse)
      .then(({ success }) => {
        if (success) {
          dispatch(setNewPassword());
        }
      })
      .catch((err) => console.log(err))
  }
}
