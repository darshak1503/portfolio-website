import React from 'react'
import './Header.css'
import { CTA } from './CTA'
import ME from '../../Photo/me1.png'
import { HeaderSocials } from './HeaderSocials'
export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Darshak Sondagar</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}
