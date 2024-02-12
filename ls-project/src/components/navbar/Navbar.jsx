import React from 'react'
// img/icons
import Logo from '../../../src/assets/img/logo.png';
import SpiderMan from '../../../src/assets/icons/spiderman.svg';
import { BsCart3 as CartIcon } from "react-icons/bs";
// styles
import './Navbar.scss';

const Navbar = ({onClickCart}) => {
    return (
        <div className="container">
            <nav className='d-flex justify-between align-center pt-40'>
                <div>
                    <a href="#"><img src={Logo} alt="logo" /></a>
                </div>
                <div className="links d-flex justify-between align-center ">
                    <a className='nav__link' href="#">About</a>
                    <a className='nav__link' href="#">Contacts</a>
                    <a className='nav__link' href="#">News</a>
                    <a className='nav__link' href="#">Parteners</a>
                </div>
                <div className="d-flex justify-between align-center links">
                    <a>
                        <CartIcon size={32}/>
                        <span className="ml-15">00.00 USD</span>
                    </a>
                    <a>
                        <img className="spiderman__icon" src={SpiderMan} alt="spiderman icon" onClick={onClickCart}/>
                    </a>
                </div>
            </nav>
        </div>

    )
}

export default Navbar