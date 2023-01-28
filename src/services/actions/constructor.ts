import { TItem } from "../../utils/types";
export const DO_INGREDIENT: 'DO_INGREDIENT' = 'DO_INGREDIENT';
export const DO_BUN: 'DO_BUN' = 'DO_BUN';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const MOVE_INGREDIENT: 'MOVE_INGREDIENT' = 'MOVE_INGREDIENT';

interface IDoIngredient {
    readonly type: typeof DO_INGREDIENT,
    item: TItem
}
interface IDeleteIngredient {
    readonly type: typeof DELETE_INGREDIENT,
    item: TItem
}
interface IAddBun {
    readonly type: typeof DO_BUN,
    item: TItem
}
interface IMoveIngredient {
    readonly type: typeof MOVE_INGREDIENT,
    dragIndex: number
    hoverIndex: number
}

export type TConstuctorAction =
    | IDoIngredient
    | IDeleteIngredient
    | IAddBun
    | IMoveIngredient

export const doIngredient = (item: TItem): IDoIngredient => ({
    type: DO_INGREDIENT,
    item,
});
export const deleteIngredient = (item: TItem): IDeleteIngredient => ({
    type: DELETE_INGREDIENT,
    item,
});

export const addBun = (item: TItem): IAddBun => ({
    type: DO_BUN,
    item,
});
export const moveIngredient = (dragIndex: number, hoverIndex: number): IMoveIngredient => ({
    type: MOVE_INGREDIENT,
    dragIndex,
    hoverIndex,
})
