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
                Telefon: 92 44 94 42<br />
                Markveien 58, Grünerløkka<br />
                Oslo, Norway<br />
            </div>
            <div className="some">
                <img src={FacebookIcon} alt="Facebook" />
                <img src={InstaIcon} alt="Instagram" />
            </div>
        </div>
        <div className="bottom">
            NY YORK © 2020
        </div>
    </footer>
    )
}

export default Footer;