import { Middleware, MiddlewareAPI } from 'redux';
import { TMiddleware } from "../services/actions/index";
import { AppDispatch, RootState } from "./types";
import { getCookie } from './coockie';

export const socketMiddleware = (url: string, actions: TMiddleware): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    return (next) => {
      return (action) => {
        const { dispatch } = store;
        const { type, payload } = action;
        const { wsInit, onOpen, onClose, onOrders } = actions;
       
        if (type === wsInit) {
          socket = new WebSocket(`${url}${payload}`);
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



