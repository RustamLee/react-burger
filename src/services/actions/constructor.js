
export const DO_INGREDIENT = 'DO_INGREDIENT';
export const DO_BUN = 'DO_BUN';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';

export const doIngredient = (item) => ({
    type: DO_INGREDIENT,
    item,
});
export const deleteIngredient = (item) => ({
    type: DELETE_INGREDIENT,
    item,
});

export const addBun = (item) => ({
    type: DO_BUN,
    item,
});
export const moveIngredient = (dragIndex, hoverIndex) =>({
    type: MOVE_INGREDIENT,
    dragIndex,
    hoverIndex,
})