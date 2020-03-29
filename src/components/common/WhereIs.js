import React from 'react';
import PropTypes from 'prop-types';
import MapContainer from './GoogleMap';
import bgImage from '../../images/whereis_background.png';

import { WhereIsWrapper } from './styles/WhereIsWrapper'

const WhereIs = ({data}) => {
    return (
        <WhereIsWrapper >
        <div className="where_is_background">
            <div className="bgImage"><img src={bgImage} /></div>
            <div className="content">
                <h2>{data[0].node.acf.hvor_ligger_nyyork_overskrift}</h2>
                <div dangerouslySetInnerHTML={{ __html: data[0].node.acf.hvor_ligger_nyyork_tekst }}>
                    
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
