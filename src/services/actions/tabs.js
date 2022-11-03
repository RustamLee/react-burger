export const SELECT_TABS = 'SELECT_TABS';
export const SELECT_SCROLL = 'SELECT_SCROLL';

export const selectTabs = (select) => ({
  type: SELECT_TABS,
  select
})
export const selectScroll = (select) => ({
  type: SELECT_SCROLL,
  select
})