import { apiConfig } from "../../utils/burger.config";
import { checkResponse } from '../../utils/burger.config';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredients = (data) => ({
    type: GET_INGREDIENTS_SUCCESS,
    data,
  });

export const getIngredientsThunk = (data) => {
  return (dispatch) => {
  fetch(`${apiConfig.baseUrl}${apiConfig.ingredients}`)

  .then (checkResponse)
  .then(({ success, data }) => {
      if (success === true) {
          dispatch(getIngredients(data))
      }
  })
  .catch((err) => {
      console.log(err)
  })
  }
}