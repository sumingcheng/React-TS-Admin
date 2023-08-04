import React, { FC, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('@/views/home/index'))
const Detail = lazy(() => import('@/views/detail/index'))

const App: FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail" element={<Detail/>}/>
        </Routes>
      </Router>
  )
}

export default App
