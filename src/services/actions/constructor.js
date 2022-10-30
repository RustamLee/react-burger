
export const DO_INGREDIENT = 'DO_CART';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export const doIngredient = (item) => ({
    type: DO_INGREDIENT,
    item,
});
export const deleteIngredient = (item) => ({
    type: DELETE_INGREDIENT,
    item,
});