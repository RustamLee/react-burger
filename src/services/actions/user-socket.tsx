import { TOrderPayload } from "../../utils/types";

export const WS_USER_CONNECTION_INITIAL = 'WS_USER_CONNECTION_INITIAL';
export const WS_USER_CONNECTION_OPEN = 'WS_USER_CONNECTION_OPEN';
export const WS_USER_CONNECTION_CLOSE = 'WS_USER_CONNECTION_CLOSE';
export const WS_USER_GET_ORDERS = 'WS_USER_GET_ORDERS';

export const userSocketActions: IUserSocketActions = {
  wsInit: WS_USER_CONNECTION_INITIAL,
  onOpen: WS_USER_CONNECTION_OPEN,
  onClose: WS_USER_CONNECTION_CLOSE,
  onOrders: WS_USER_GET_ORDERS,
}

export interface IUserSocketActions {
  readonly wsInit: typeof WS_USER_CONNECTION_INITIAL
  readonly onOpen: typeof WS_USER_CONNECTION_OPEN
  readonly onClose: typeof WS_USER_CONNECTION_CLOSE
  readonly onOrders: typeof WS_USER_GET_ORDERS
}

interface IUserWsConnectionInitial {
  readonly type: typeof WS_USER_CONNECTION_INITIAL
  readonly payload: string | undefined
}
interface IUserWsConnectionOpen {
  readonly type: typeof WS_USER_CONNECTION_OPEN
}
interface IUserWsConnectionClose {
  readonly type: typeof WS_USER_CONNECTION_CLOSE
}
interface IUserWsConnectionOrders {
  readonly type: typeof WS_USER_GET_ORDERS,
  readonly payload: TOrderPayload
}

export type TUserWsActions =
  | IUserWsConnectionInitial
  | IUserWsConnectionOpen
  | IUserWsConnectionClose
  | IUserWsConnectionOrders

export const userWsConnectionInitial = (payload: string | undefined): IUserWsConnectionInitial => {
  return {
    type: WS_USER_CONNECTION_INITIAL,
    payload
  }
}
export const userWsConnectionOpen = (): IUserWsConnectionOpen => {
  return {
    type: WS_USER_CONNECTION_OPEN
  }
}
export const userWsConnectionClose = (): IUserWsConnectionClose => {
  return {
    type: WS_USER_CONNECTION_CLOSE
  }
}
export const userWsConnectionOrders = (payload: TOrderPayload): IUserWsConnectionOrders => {
  return {
    type: WS_USER_GET_ORDERS,
    payload
  }
}
