import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import Home from '@/views/home/index';
import {createRoot} from 'react-dom/client'

import config from '../config/index';

const store = configureStore({
  reducer: rootReducer,
});

console.log(config)

const root = document.getElementById('root');
if (!root) {
  throw new Error("No root element found");
}

createRoot(root).render(
    <Provider store={store}>
      <Home/>
    </Provider>,
);
