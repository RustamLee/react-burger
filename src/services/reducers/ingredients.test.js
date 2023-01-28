import {
  initialState as state,
reduceIngredients as reducer
} from './ingredients'
import { ingredient } from '../../utils/test-constants'
import { getIngredients } from '../actions/ingredients'


describe('get ingredients test', () => {
  it ('should get ingredients', () => {
    expect(reducer(state, getIngredients([ingredient, ingredient]))).toEqual({
      ...state,
     ingredients: [
        ingredient,
        ingredient,
      ]
    });

  })
})
