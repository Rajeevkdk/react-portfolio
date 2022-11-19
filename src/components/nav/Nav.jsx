import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {FaBrain} from 'react-icons/fa'
import {RiServiceLine} from 'react-icons/ri'
import {MdCreateNewFolder} from 'react-icons/md'
import {MdPhotoLibrary} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState ('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' :''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience"  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBrain/></a>
      <a href="#services"  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#portfolio"  onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdCreateNewFolder/></a>
      <a href="#gallery"  onClick={() => setActiveNav('#gallery')} className={activeNav === '#gallery' ? 'active' : ''}><MdPhotoLibrary/></a>
      <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillPhone/></a>
    </nav>
  )
}

export default Nav