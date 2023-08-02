import React, {StrictMode} from 'react';
// import {configureStore} from '@reduxjs/toolkit';
// import rootReducer from './reducers';
import {createRoot} from 'react-dom/client'
import App from '@/router/index';
// const store = configureStore({
//   reducer: rootReducer
// });
import '@/assets/tailwind.css';
import '@/assets/reSet.less';

const Root = () => {
  return (
      <StrictMode>
        <App/>
      </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root/>);
