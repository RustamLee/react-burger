import { SELECT_TABS, SELECT_SCROLL } from "../actions/tabs";
import { TUnionAction } from "../actions";

const initialState: TInitialState = {
  select: 'one',
  scroll: 'one'
}

type TInitialState = {
  select: string,
  scroll: string,
}

export const selectTabsReducer = (state = initialState, action: TUnionAction): TInitialState => {
  switch (action.type) {
    case SELECT_TABS: {
      return {
        ...state,
        select: action.select
      }
    }
    case SELECT_SCROLL: {
      return {
        ...state,
        scroll: action.select
      }
    }
    default: {
      return state
    }
  }
}
