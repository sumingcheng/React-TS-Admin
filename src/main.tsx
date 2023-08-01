import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import Home from '@/views/home/index';

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
    <Provider store={store}>
      <Home/>
    </Provider>,
    document.getElementById('root'),
);
