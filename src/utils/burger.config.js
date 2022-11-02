export const apiConfig = {
    baseUrl: 'https://norma.nomoreparties.space/api',
    ingredients: '/ingredients',
    orders: '/orders',
}

export const checkResponse = (res) => {
    if (res.ok) {
      return res.json()
    }}