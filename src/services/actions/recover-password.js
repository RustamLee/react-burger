
import { apiConfig } from "../../utils/burger.config";
import { checkResponse } from '../../utils/burger.config'

export const NEW_PASSWORD = 'NEW_PASSWORD';

export const getNewPassword = () => ({
  type: NEW_PASSWORD,

})

export const getNewPasswordThunk = (email) => {
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
