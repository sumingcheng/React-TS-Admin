import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

const Profile = lazy(() => import('./page/profile'))
const Settings = lazy(() => import('./page/settings'))

const Detail: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  )
}

export default Detail
