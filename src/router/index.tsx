import React, { FC, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NProgressHandler from '@/layout/components/nprogress'

const Layout = lazy(() => import('@/layout/index'))
const Home = lazy(() => import('@/views/Home/index'))
const Detail = lazy(() => import('@/views/Detail/page/routes'))

const App: FC = () => {
  return (
    <Router>
      <Suspense fallback={<NProgressHandler />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="detail/*" element={<Detail />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
