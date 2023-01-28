import { apiConfig, checkResponse } from './burger.config'
import { deleteCookie, getCookie, setCookie } from './coockie'

export const refresh = () => {
  fetch(`${apiConfig.baseUrl}${apiConfig.token}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token: getCookie("refreshToken")
    })
  })
    .then(checkResponse)
    .then(({ success, accessToken, refreshToken }) => {
      if (success) {
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        setCookie('accessToken', accessToken.split('Bearer ')[1]);
        setCookie('refreshToken', refreshToken);
      }
    })
    .catch((err) => console.log(err))
}

