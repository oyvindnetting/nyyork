import React from 'react';
import { AdWrapper } from './styles/AdWrapper';
import PropTypes from 'prop-types';

import JeansAdImage from '../../images/jeansad.png';
import WearAdImage from '../../images/wearad.png';

const Ad = ({type}) => (
    <AdWrapper>
        <img src={type === 'jeans'? JeansAdImage : WearAdImage} alt="Jeans Ad" />
    </AdWrapper>

)


Ad.propTypes = {
    type: PropTypes.string
}

export default Ad;