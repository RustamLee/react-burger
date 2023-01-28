import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { store } from './utils/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <BrowserRouter basename={'/react-burger/'}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);