import React, {FC, lazy, Suspense} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NProgressHandler from '@/layout/components/nprogress'

const Home = lazy(() => import('@/views/home/index'))
const Detail = lazy(() => import('@/views/detail/index'))
const Layout = lazy(() => import('@/layout/index'))

const App: FC = () => {
  return (
      <Router>
        <Suspense fallback={<NProgressHandler/>}>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="detail" element={<Detail/>}/>
            </Route>
          </Routes>
        </Suspense>
      </Router>
  )
}

export default App
