import {
  initialState as state,
  reduceItems as reducer
} from './constructor'

import {
  doIngredient,
  deleteIngredient,
  addBun,
  moveIngredient
} from '../actions/constructor'

import { bun, constructorElement, secondConstructorElement } from '../../utils/test-constants'

describe('constructor test', () => {
  it('add element', () => {
    expect(reducer(state, doIngredient(bun))).toEqual({
      bun: [],
      items: []
    })
  });
  it('delete element', () => {
    expect(reducer({
      bun: [bun],
      items: [constructorElement]
    }, deleteIngredient(constructorElement)))
      .toEqual({
        bun: [bun],
        items: []
      })
  });
  it('add bun', () => {
    expect(reducer({items: [constructorElement], bun: []}, addBun(bun)))
      .toEqual({ items: [constructorElement], bun: [bun] })
  });
  it('move element', () => {
    expect(reducer({
      ...state,
      items: [constructorElement, secondConstructorElement, constructorElement]
    }, moveIngredient(1, 2)))
      .toEqual({
        ...state,
        items: [constructorElement, constructorElement, secondConstructorElement]
      })
  })
})
