import React, {FC, lazy} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NProgressHandler from '@/layout/nprogress'

const Home = lazy(() => import('@/views/home/index'))
const Detail = lazy(() => import('@/views/detail/index'))
const Layout = lazy(() => import('@/layout/index'))

const App: FC = () => {
  return (
      <Router>
        <NProgressHandler/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="detail" element={<Detail/>}/>
          </Route>
        </Routes>
      </Router>
  )
}

export default App
