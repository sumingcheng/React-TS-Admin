import React, { FC, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Profile = lazy(() => import('./profile'))
const Settings = lazy(() => import('./settings'))

const Detail: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  )
}

export default Detail
