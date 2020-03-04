import React from 'react';

import Logo from '../images/logo.png';
import BritishFlag from '../images/british_flag.svg';

import { Link } from 'gatsby';

const Header = ({theme}) => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top">
            
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
      

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" >
                            <Link to="/wear"  className="nav-link" activeClassName="nav-active">
                                WEAR
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/jeans"  className="nav-link" activeClassName="nav-active">
                                JEANS
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="/shop"  className="nav-link" activeClassName="nav-active">
                                SHOP
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/omoss"  className="nav-link" activeClassName="nav-active">
                                OM OSS
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
            <div className="shopping_english">
    
                <div className="english">
         
                    <Link to="/english" activeClassName="nav-active">
                        <img src={BritishFlag} alt="british flag" />
                    </Link>
                </div>
            </div>
        </header>  
    )
}

export default Header;