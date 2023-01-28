import { TOrderPayload } from "../../utils/types";

export const WS_CONNECTION_INITIAL = 'WS_CONNECTION_INITIAL';
export const WS_CONNECTION_OPEN = 'WS_CONNECTION_OPEN';
export const WS_CONNECTION_CLOSE = 'WS_CONNECTION_CLOSE';
export const WS_GET_ORDERS = 'WS_GET_ORDERS';

export const socketActions: ISocketActions = {
  wsInit: WS_CONNECTION_INITIAL,
  onOpen: WS_CONNECTION_OPEN,
  onClose: WS_CONNECTION_CLOSE,
  onOrders: WS_GET_ORDERS,
}

export interface ISocketActions {
  readonly wsInit: typeof WS_CONNECTION_INITIAL
  readonly onOpen: typeof WS_CONNECTION_OPEN
  readonly onClose: typeof WS_CONNECTION_CLOSE
  readonly onOrders: typeof WS_GET_ORDERS
}

interface IWsConnectionInitial {
  readonly type: typeof WS_CONNECTION_INITIAL
  payload: string
}
interface IWsConnectionOpen {
  readonly type: typeof WS_CONNECTION_OPEN
}
interface IWsConnectionClose {
  readonly type: typeof WS_CONNECTION_CLOSE
}
interface IWsConnectionOrders {
  readonly type: typeof WS_GET_ORDERS,
  readonly payload: TOrderPayload
}

export type TWsActions =
  | IWsConnectionInitial
  | IWsConnectionOpen
  | IWsConnectionClose
  | IWsConnectionOrders

export const wsConnectionInitial = (payload: string): IWsConnectionInitial => {
  return {
    type: WS_CONNECTION_INITIAL,
    payload
  }
}

export const wsConnectionOpen = (): IWsConnectionOpen => {
  return {
    type: WS_CONNECTION_OPEN
  }
}
export const wsConnectionClose = (): IWsConnectionClose => {
  return {
    type: WS_CONNECTION_CLOSE
  }
}
export const wsConnectionOrders = (payload: TOrderPayload): IWsConnectionOrders => {
  return {
    type: WS_GET_ORDERS,
    payload
  }
}
