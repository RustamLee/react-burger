import React from 'react';
import ReactDOM from 'react-dom/client';
import { compose, createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { mainReducer } from './services/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(mainReducer, enhancer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
