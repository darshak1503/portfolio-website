import React from 'react'
import { About } from './component/About/About'
import { Header } from './component/Header/Header'
import { Navbar } from './component/Navbar/Navbar'
import { Experience} from './component/Experience/Experience'
import {Portfolio } from './component/Portfolio/Portfolio'
import {Contact } from './component/Contact/Contact'
import {Footer} from './component/Footer/Footer'

export const App = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}
