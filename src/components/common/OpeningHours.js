import React from 'react';
import PropTypes from 'prop-types';
import { OpeningHoursWrapper } from './styles/OpeningHoursWrapper';

const OpeningHours = ({color, store, data}) => {


    return (
        <OpeningHoursWrapper color={color}>
        {(store === 'wear') ? 
            <div dangerouslySetInnerHTML={{ __html: data[0].node.acf.apningstider_wear }}></div>

        : 
            <div dangerouslySetInnerHTML={{ __html: data[0].node.acf.apningstider_jeans }}></div>
            
        }
        </OpeningHoursWrapper>
    );

}

OpeningHours.propTypes = {
    color: PropTypes.string,
    store: PropTypes.string,
    data: PropTypes.array.isRequired
}

export default OpeningHours;


