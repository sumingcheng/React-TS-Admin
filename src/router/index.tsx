import React, { FC, Suspense } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NProgressHandler from '@/layout/components/nprogress'

const Layout = React.lazy(() => import('@/layout'))
// 预加载资源
const Home = lazy(() => import(/* webpackPrefetch: true */ '@/views/Home/index'))
const Detail = lazy(() => import(/* webpackPrefetch: true */ '@/views/Detail/routes'))
const User = lazy(() => import(/* webpackPrefetch: true */ '@/views/User/index'))

const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<NProgressHandler />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="detail/*" element={<Detail />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
