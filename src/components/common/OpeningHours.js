import React from 'react';
import PropTypes from 'prop-types';
import { OpeningHoursWrapper } from './styles/OpeningHoursWrapper';

const OpeningHours = ({color}) => (
    
    <OpeningHoursWrapper color={color}>
        VINTAGE WEAR<br />
        <span>Mandag - Lørdag</span><br />
        12.00–18.00<br /><br />

        VINTAGE JEANS<br />
        <span>Man, Tor, Fre, Lør</span><br />
        14.00 - 18.00

    </OpeningHoursWrapper>
)

OpeningHours.propTypes = {
    color: PropTypes.string,
}

export default OpeningHours;