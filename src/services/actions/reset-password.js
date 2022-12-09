
import { apiConfig } from "../../utils/burger.config";
import { checkResponse } from '../../utils/burger.config'

export const GET_PASSWORD = 'GET_PASSWORD';

export const setNewPassword = () => ({
  type: GET_PASSWORD,

})

export const setNewPasswordThunk = (password, token) => {
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
