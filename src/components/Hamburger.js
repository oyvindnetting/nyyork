import React from 'react';
import PropTypes from 'prop-types';

import { HamburgerButton } from './styles/HamburgerStyles';
import HamburgerHeart from '../images/heart_hamburger.svg';

const Hamburger = ({ handleOverlayMenu }) => {

    return (
        <HamburgerButton onClick={handleOverlayMenu} tabIndex="0">
            <img src={HamburgerHeart} alt="Hamburger menu" />
        </HamburgerButton>
    )
}

Hamburger.propTypes = {
    handleOverlayMenu: PropTypes.func,   
};

export default Hamburger;