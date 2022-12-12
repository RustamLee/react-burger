import { Middleware, MiddlewareAPI } from 'redux';
import { TMiddleware } from "../services/actions/index";
import { AppDispatch,RootState } from "./types";




export const middleware = (url: string, actions: TMiddleware): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    return (next) => {
      return (action) => {
        const { dispatch, getState } = store;
        const { type, payload } = action;
        const { wsInit, onOpen, onClose, onOrders } = actions;
        const { isLogged } = getState().login;
        if (type === wsInit) {
          socket = new WebSocket(`${url}${type === wsInit && payload && isLogged? `?token=${payload}` : '' }`);

        }
        if (socket) {
          socket.onopen = () => {
            dispatch({ type: onOpen })
          };
          socket.onmessage = (event) => {
            const { data } = event;
            const parsedData = JSON.parse(data);
            const { success } = parsedData;
            success && dispatch({ type: onOrders, payload: parsedData });
          };
        }
        if (socket && type === onClose) {
          socket.close(1000);
          socket.onclose = () => {
            dispatch({ type: onClose })
          }
        }
        next(action);
      }
    }
  }
}



