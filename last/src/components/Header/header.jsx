import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">Fruit-Shop</Link>
            <nav className="navigation">
                <Link to="/shop" className="nav-link">SHOP</Link>
            </nav>
            <Link to="/cart" className="cart-link">
                <div className="cart">
                    <span className="cart-icon"><i className="fa fa-shopping-cart"></i></span>
                    CART: <span className="cart-count">0</span>
                </div>
            </Link>
        </header>
    );
}

export default Header;
