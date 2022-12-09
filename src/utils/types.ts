
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
  TypedUseSelectorHook
} from "react-redux";
import { ActionCreator } from "redux";
import { ThunkDispatch, ThunkAction } from "redux-thunk";
import {store} from './store';
import { TUnionAction } from "../services/actions";

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, RootState, never, TUnionAction>
>;

export const useDispatch = dispatchHook<ThunkDispatch<RootState, never, TUnionAction>>;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export type TItem = {
  _id: string,
  name: string,
  type: string,
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image: string,
  image_mobile: string,
  image_large: string,
  __v: number,
  id?: string | undefined
}


