import { TItem } from "../../utils/types"

export const GET_INGREDIENT_DETAILS: 'GET_INGREDIENT_DETAILS' = 'GET_INGREDIENT_DETAILS';

interface IGetIngredientsDetails {
  readonly type: typeof GET_INGREDIENT_DETAILS,
  item: TItem
}

export type TIngredientsDetails =
| IGetIngredientsDetails

export const getIngredientsDetails = (item: TItem): IGetIngredientsDetails => ({
    type: GET_INGREDIENT_DETAILS,
    item,
  })
