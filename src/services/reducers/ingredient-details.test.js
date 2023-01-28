import {
  initialState as state,
  reduceIngredientDetails as reducer
} from './ingredient-details';
import { ingredient } from '../../utils/test-constants';
import { getIngredientsDetails } from '../actions/ingredient-details'

describe('ingredient details test', () => {
  it('test get details', () => {
    expect(reducer(state, getIngredientsDetails(ingredient) )).toEqual({
      ingredient: ingredient
    })
  })
})
