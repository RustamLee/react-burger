import { socketMiddleware } from './middleware';
import { apiConfig } from './burger.config';
import { userSocketActions } from '../services/actions/user-socket';
import { socketActions } from '../services/actions/all-socket';
import { mainReducer } from '../services/reducers/';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit/';

export const store = configureStore({
  reducer: mainReducer,
  middleware: [thunk,
    socketMiddleware(apiConfig.socket, socketActions),
    socketMiddleware(apiConfig.userSocket, userSocketActions)
  ],
  devTools: true
})
