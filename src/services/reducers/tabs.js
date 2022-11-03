import { SELECT_TABS, SELECT_SCROLL } from "../actions/tabs";

const initialState = {
  select: 'one',
  scroll: 'one'
}

export const selectTabsReducer = (state = initialState, action) => {
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