
import { apiConfig } from "../../utils/burger.config";
import { checkResponse } from '../../utils/burger.config'
import { AppThunk } from "../../utils/types";

export const NEW_PASSWORD: 'NEW_PASSWORD' = 'NEW_PASSWORD';

interface IGetNewPassword {
  readonly type: typeof NEW_PASSWORD
}
export type TGetNewPassword =
| IGetNewPassword

export const getNewPassword = (): IGetNewPassword => ({
  type: NEW_PASSWORD,

})

export const getNewPasswordThunk: AppThunk = (email: string) => {
  return (dispatch) => {

    fetch(`${apiConfig.baseUrl}${apiConfig.recover}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email
      })
    })
      .then(checkResponse)
      .then(({ success }) => {
        if (success) {
          dispatch(getNewPassword());
        }
      })
      .catch((err) => console.log(err))
  }
}
