import React from 'react';

import Logo from '../images/logo.png';
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
                            <AniLink fade to="/english"  className="nav-link" activeClassName="nav-active">
                                ENGLISH
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

        </header>  
    )
}

export default Header;