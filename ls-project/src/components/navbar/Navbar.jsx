import React from 'react';
import './Navbar.scss';
import Logo from '../../assets/img/logo.png';
import SpiderMan from '../../assets/icons/spider2.svg';
import { CiShoppingCart as CartIcon } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <nav className='d-flex justify-between align-center pt-40'>
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="links d-flex justify-between align-center">
          <a className='nav_link' href="">About</a>
          <a className='nav_link' href="">Contacts</a>
          <a className='nav_link' href="">News</a>
          <a className='nav_link' href="">Partners</a>
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
