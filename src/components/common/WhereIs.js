import React from 'react';
import PropTypes from 'prop-types';
import MapContainer from './GoogleMap';
import bgImage from '../../images/whereis_background.png';

import { WhereIsWrapper } from './styles/WhereIsWrapper'

const WhereIs = ({data}) => {

    console.log("Om oss Data")
    console.log(data)
    return (
        <WhereIsWrapper >
        <div className="where_is_background">
            <div className="bgImage"><img src={bgImage} alt="Om oss bakgrunn" /></div>
            <div className="content">
                <h2>{data[0].node.acf.hvor_er_ny_york_overskrift}</h2>
                <div dangerouslySetInnerHTML={{ __html: data[0].node.acf.hvor_er_ny_york_tekst }}>
                    
                </div>

                <div className="nyYorkMap">
                <MapContainer
                    
 
                    />
            
                </div>
            </div>
        </div>
    </WhereIsWrapper>
    )
}
WhereIs.propTypes = {
    color: PropTypes.string,
    data: PropTypes.array.isRequired
}
   
export default WhereIs;
