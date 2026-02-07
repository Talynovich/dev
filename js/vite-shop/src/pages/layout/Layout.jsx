import React from 'react'
import Header from '../headerPage'
import Footer from '../footerPage'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="mx-auto w-full max-w-7xl px-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
