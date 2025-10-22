import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Home from '../pages/Home'
const Layout = () => {

    

  return (
    <div>
        <Navbar/>
        <main className='min-h-screen'>
            <Outlet/>
        </main>
        <Footer/>
      
    </div>
  )
}

export default Layout
