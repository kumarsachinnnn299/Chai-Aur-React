import React from 'react'
import {Header,Footer} from './components'
import { Outlet } from 'react-router-dom'//outlet jo h layout ko base use krega and uske upar alg alg cheeje place krr dega

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
