import React from 'react'
import { Outlet } from 'react-router'
import Header from '../header'
import Footer from '../footer/index.js'

const LaoutPage = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default LaoutPage
