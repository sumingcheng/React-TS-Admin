import React, {StrictMode} from 'react';
// import {configureStore} from '@reduxjs/toolkit';
// import rootReducer from './reducers';
import Home from '@/views/home/index';
import {createRoot} from 'react-dom/client'
import '@/assets/index.less';
// const store = configureStore({
//   reducer: rootReducer
// });

const Root = () => {
  return (
      <StrictMode>
        <Home/>
      </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root/>);
