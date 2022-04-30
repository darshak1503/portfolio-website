import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {RiMailFill} from 'react-icons/ri'
import { useState } from 'react'
export const Navbar = () => {
  const [activateNav , setActivateNav] = useState('#')
  return (
    <nav>
      <a href =" #" onClick={() => setActivateNav('#')} className= {activateNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActivateNav('about')} className= {activateNav === 'about' ? 'active': ''} ><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActivateNav('experience')} className= {activateNav === 'experience' ? 'active': ''}><BiBook/></a>
      <a href="#portfolio" onClick={() => setActivateNav('portfolio')} className= {activateNav === 'portfolio' ? 'active': ''}><MdOutlinePermContactCalendar/></a>
      <a href="#contact" onClick={() => setActivateNav('contact')} className= {activateNav === 'contact' ? 'active': ''}><RiMailFill/></a>
    </nav>
  )
}
