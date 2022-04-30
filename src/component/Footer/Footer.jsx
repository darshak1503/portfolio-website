import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
export const Footer = () => {
  return (
    <footer>
      <a href=" #" className='footer__logo'>Darshak Sondagar</a>
      <ul className='permalinks'>
        <li><a href=" #">Home</a></li>
        <li><a href=" #about">About</a></li>
        <li><a href=" #experience">Experience</a></li>
        <li><a href=" #portfolio">Portfolio</a></li>
        <li><a href=" #contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100008063298857"><FaFacebookF/></a>
        <a href="https://www.instagram.com/_.iam_darshak/"><FiInstagram/></a>
        <a href="https://twitter.com/DarshakSondagar"><FaTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Darshak Sondagar. All rights reserved.
        </small>
      </div>
    </footer>
  )
}
