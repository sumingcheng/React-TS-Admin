import React, { FC, Suspense } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NProgressHandler from '@/layout/components/nprogress'

const Layout = React.lazy(() => import('@/layout'))
// 预加载资源
const Home = React.lazy(() => import(/* webpackPrefetch: true */ '@/views/Home/index'))
const Detail = React.lazy(() => import(/* webpackPrefetch: true */ '@/views/Detail/routes'))
const User = React.lazy(() => import(/* webpackPrefetch: true */ '@/views/User/index'))
const Chat = React.lazy(() => import(/* webpackPrefetch: true */ '@/views/Chat/index'))

const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<NProgressHandler />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Chat />} />
            {/*<Route path="/user" element={<User />} />*/}
            {/*<Route path="/chat" element={<Chat />} />*/}
            {/*<Route path="detail/*" element={<Detail />} />*/}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
