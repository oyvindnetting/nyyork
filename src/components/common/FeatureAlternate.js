import React from 'react';
import { FeatureAlternateWrapper } from './styles/FeatureAlternateWrapper';

import FeatureImage from '../../images/feature_image3.jpg';

const FeatureAlternate = ({color, bgColor}) => (
    <FeatureAlternateWrapper color={color} bgColor={bgColor}>
        <div className="image">
            <img src={FeatureImage} alt="Feature image 2" />
        </div>
        <div className="content">
            <h2><span>FEATURE:</span>VINTAGE</h2>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, expedita consectetur! Id totam nihil maiores temporibus autem unde, magni quibusdam quo architecto eligendi quisquam voluptatem dolore aut harum assumenda commodi.

            </div>
            <button>LES MER</button>
        </div>
    </FeatureAlternateWrapper>

)

export default FeatureAlternate;