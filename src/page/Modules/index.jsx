import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './components/navbar'

export default function ModulesPage() {
  

  return (
      <>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </>
  )
}
