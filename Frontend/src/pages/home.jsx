import React from 'react'
import Navbar from '../components/navbar'
import LandingPage from './landingpage'
import FreeBook from './freebook'
import Footer from '../components/footer'

function home() {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <FreeBook/>
    <Footer/>
    </>
  )
}

export default home