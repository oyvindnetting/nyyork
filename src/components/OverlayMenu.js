import React from 'react';
import { Link } from 'gatsby';

import WhiteLogo from '../images/logo.png';
import CloseButton from '../images/close_button.svg';

import { Overlay } from './styles/OverlayMenuStyles';

const OverlayMenu = ({ menuOpen, callback }) => {

  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
      <Link to="/">
      <img className="whiteLogo" src={WhiteLogo} alt="tango-white-logo" />

      </Link>
        <ul className="overlayMenu">
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
          <li className="nav-item">
              <Link to="/english"  className="nav-link" activeClassName="nav-active">
                  ENGLISH
              </Link>
          </li>     
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <img src={CloseButton} alt="tango-close-button" />
        </div>
      </div>
    </Overlay>
  );
};

export default OverlayMenu;
