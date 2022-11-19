import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
  <footer>
    <a href="#" className='footer__logo'>Rajeev Khadka</a>

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contacts</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.facebook.com/rajeev.kdk/" target="_blank"><BsFacebook /></a>
      <a href="https://www.instagram.com/kdk_rajeev/" target="_blank"><GrInstagram /></a>
      <a href="https://twitter.com/Razev_Khadka" target="_blank"><AiOutlineTwitter /></a>
      <a href="https://www.linkedin.com/in/rajeev-khadka-706968154/" target="_blank"><AiFillLinkedin /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Rajeev Khadka. All rights reserved</small>
    </div>
  </footer>
  )
}

export default Footer