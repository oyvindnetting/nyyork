import React from 'react';
import { OpeningHoursWrapper } from './styles/OpeningHoursWrapper';

const OpeningHours = ({theme}) => (
    
    <OpeningHoursWrapper pink theme={theme}>
        VINTAGE WEAR<br />
        <span>Mandag - Lørdag</span><br />
        12.00–18.00<br /><br />

        VINTAGE JEANS<br />
        <span>Man, Tor, Fre, Lør</span><br />
        14.00 - 18.00

    </OpeningHoursWrapper>
)

export default OpeningHours;