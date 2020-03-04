import React from 'react';

import Logo from '../images/logo.png';
import BritishFlag from '../images/british_flag.svg';

import { Link } from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top">
                <AniLink fade className="navbar-brand" to="/">
                    <img src={Logo} alt="logo" />
                </AniLink>
           
                <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i className="fas fa-bars fa-1x"></i></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" >
                            <AniLink fade to="/wear" className="nav-link" activeClassName="nav-active">
                                WEAR
                            </AniLink>
                        </li>
                        <li className="nav-item">
                            <AniLink fade to="/jeans"  className="nav-link" activeClassName="nav-active">
                                JEANS
                            </AniLink>
                        </li>
                        <li className="nav-item" >
                            <AniLink fade to="/shop"  className="nav-link" activeClassName="nav-active">
                                SHOP
                            </AniLink>
                        </li>
                        <li className="nav-item">
                            <AniLink fade to="/omoss"  className="nav-link" activeClassName="nav-active">
                                OM OSS
                            </AniLink>
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