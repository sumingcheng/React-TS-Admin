import React, {StrictMode} from 'react';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '@/store/rootReducer';
import {Provider} from 'react-redux';
import {createRoot} from 'react-dom/client'
import App from '@/router/index';
import '@/assets/tailwind.css';
import '@/assets/normalize.less';

const store = configureStore({
  reducer: rootReducer,
});

const Root = () => {
  return (
      <Provider store={store}>
        <StrictMode>
          <App/>
        </StrictMode>
      </Provider>
  )
};

createRoot(document.getElementById('root')).render(<Root/>);
