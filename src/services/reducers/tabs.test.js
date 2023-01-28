import {
  initialState as state,
  selectTabsReducer as reducer
} from './tabs'

import {
  selectTabs,
  selectScroll
} from '../actions/tabs'

import { testSelect } from '../../utils/test-constants'

describe('tabs test', () => {
  it('should tab select', () => {
    expect(reducer(state, selectTabs(testSelect))).toEqual({
      select: 'two',
      scroll: 'one'
    })
  });
  it('should scroll select', () => {
    expect(reducer(state, selectScroll(testSelect))).toEqual({
      select: 'one',
      scroll: 'two'
    })
  })
})
