export const apiConfig = {
  baseUrl: 'https://norma.nomoreparties.space/api',
  ingredients: '/ingredients',
  orders: '/orders',
  recover: '/password-reset',
  reset: '/password-reset/reset',
  register: '/auth/register',
  login: '/auth/login',
  logout: '/auth/logout',
  user: '/auth/user',
  token: '/auth/token' 

}

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка ${res.status}`)
}
