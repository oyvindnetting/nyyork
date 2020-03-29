import React from "react";

import Logo from "../images/logo.png";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <button
          className="navbar-toggler toggler-example"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="dark-blue-text">
            <i className="fas fa-bars fa-1x"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                to="/wear"
                className="nav-link"
                activeClassName="nav-active"
              >
                WEAR
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/jeans"
                className="nav-link"
                activeClassName="nav-active"
              >
                JEANS
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://nyyorkvintage.myshopify.com/"
                className="nav-link"
              >
                SHOP
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/omoss"
                className="nav-link"
                activeClassName="nav-active"
              >
                OM OSS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/english"
                className="nav-link"
                activeClassName="nav-active"
              >
                ENGLISH
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
