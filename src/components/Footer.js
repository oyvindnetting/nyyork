import React from 'react';

import FacebookIcon from '../images/facebook_icon.svg';
import InstaIcon from '../images/insta_icon.svg';

const Footer = () => {

    return (
        <footer>
        <div className="top">
            <div className="address">
                <span>Ny York – Vintage & 2nd hand</span><br />
                E-post: <a href="mailto:post@nyyork.no">post@nyyork.no</a><br />
                Thorvald Meyers gate 50, Grünerløkka<br />
                Oslo, Norway<br />
            </div>
            <div className="some">
            <a href="https://www.facebook.com/nyyorkoslo/" target="new">
                <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/vintagewearbyny/" target="new">
                <img src={InstaIcon} alt="Instagram" />
            </a>
            </div>
        </div>
        <div className="bottom">
            NY YORK © 2020
        </div>
    </footer>
    )
}

export default Footer;