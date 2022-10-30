export const GET_INGREDIENT_DETAILS = 'GET_INGREDIENT_DETAILS';

export const getIngredientsDetails = (item) => ({
    type: GET_INGREDIENT_DETAILS,
    item,
  })