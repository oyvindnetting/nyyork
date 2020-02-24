import React from 'react';

import Logo from '../images/logo.png';
import ShoppingCart from '../images/shopping_cart.svg';
import BritishFlag from '../images/british_flag.svg';


const Header = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top">
                <a className="navbar-brand" href="index.html">
                    <img src={Logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="wear.html">WEAR <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="jeans.html">JEANS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="shop.html">SHOP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="omoss.html">OM OSS</a>
                        </li>
                    </ul>
                </div>
               
            </nav>
            <div className="shopping_english">
                <div className="shopping_cart">
                    <img src={ShoppingCart} alt="shopping cart" />
                </div>
                <div className="english">
                    <a href="english.html">
                        <img src={BritishFlag} alt="british flag" />
                    </a>
                </div>
            </div>
        </header>  
    )
}

export default Header;