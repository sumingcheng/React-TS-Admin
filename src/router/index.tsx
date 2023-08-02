import React, {FC} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '@/views/home/index';
import Detail from '@/views/detail/index';

const App: FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail" element={<Detail/>}/>
        </Routes>
      </Router>
  );
}

export default App;
