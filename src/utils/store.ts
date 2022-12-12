import { compose, createStore, applyMiddleware } from 'redux';
import { middleware } from './middleware';
import { apiConfig } from './burger.config';
import { userSocketActions } from '../services/actions/user-socket';
import { socketActions } from '../services/actions/all-socket';
import { mainReducer } from '../services/reducers/';
import thunk from 'redux-thunk';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // middleware(apiConfig.socket, socketActions),
  //middleware(apiConfig.userSocket, userSocketActions)
);
export const store = createStore(mainReducer, enhancer);