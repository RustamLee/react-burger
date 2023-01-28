export const SELECT_TABS = 'SELECT_TABS';
export const SELECT_SCROLL = 'SELECT_SCROLL';

interface ISelectTabs {
  readonly type: typeof SELECT_TABS,
  select: string
}
interface ISelectScroll {
readonly type: typeof SELECT_SCROLL,
  select: string
}

export type TTabs =
  | ISelectTabs
  | ISelectScroll

export const selectTabs = (select: string): ISelectTabs => ({
  type: SELECT_TABS,
  select
})
export const selectScroll = (select: string): ISelectScroll => ({
  type: SELECT_SCROLL,
  select
})
