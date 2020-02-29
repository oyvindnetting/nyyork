import React from 'react';
import { AdWrapper } from './styles/AdWrapper';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import JeansAdImage from '../../images/jeansad.png';
import WearAdImage from '../../images/wearad.png';

const Ad = ({type}) => (
    <AdWrapper>
        <Link to={type === 'jeans'? '/jeans' : '/wear' }>
            <img src={type === 'jeans'? JeansAdImage : WearAdImage} alt="Jeans Ad" />

        </Link>
    </AdWrapper>

)


Ad.propTypes = {
    type: PropTypes.string
}

export default Ad;