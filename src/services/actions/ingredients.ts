import { apiConfig } from "../../utils/burger.config";
import { checkResponse } from '../../utils/burger.config';
import { TItem } from "../../utils/types";
import { AppThunk } from "../../utils/types";

export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';

interface IGetIngredients {
  readonly type: typeof GET_INGREDIENTS_SUCCESS,
  data: Array<TItem>
}

export type TGetIngredients =
  | IGetIngredients 

export const getIngredients = (data: Array<TItem>): IGetIngredients => ({
  type: GET_INGREDIENTS_SUCCESS,
  data,
});

export const getIngredientsThunk: AppThunk = (data: Array<TItem>) => {
  return (dispatch) => {
    fetch(`${apiConfig.baseUrl}${apiConfig.ingredients}`)

      .then(checkResponse)
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
