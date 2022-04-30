import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaHackerrank} from 'react-icons/fa'
export const HeaderSocials = () => {
  return (
    <div className= 'header__socials'>
        <a href="https://www.linkedin.com/in/darshak-sondagar-6a92711b5/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/darshak1503" target="_blank"><BsGithub/></a>
        <a href="https://www.hackerrank.com/darshak_1503" target = "_blank"><FaHackerrank/></a>
    </div>
  )
}
