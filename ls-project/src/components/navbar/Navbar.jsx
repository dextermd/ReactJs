// Lib
import React from 'react'
// Style
import './Navbar.scss'
// Img
import Logo from '../../assets/img/logo.png'
import SpiderMan from '../../assets/icons/spider2.svg'
import { CiShoppingCart as CartIcon } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="container">
      <nav className='d-flex justify-between align-center pt-40'>
        <div>
          <a href="#"><img src={Logo} alt="logo" /></a>
        </div>
        <div className="links d-flex justify-between align-center">
          <a className='nav_link' href="">About</a>
          <a className='nav_link' href="">Contacts</a>
          <a className='nav_link' href="">News</a>
          <a className='nav_link' href="">Parteners</a>
        </div>
        <div className="d-flex justify-between align-center links">
          <a>
              <CartIcon size={32}/>
              <span className="ml-15">00.00 USD</span>
          </a>
          <a>
              <img className='spiderman_icon' src={SpiderMan} alt="spiderman icon" />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;