import React from 'react';
import { AdWrapper } from './styles/AdWrapper';

import JeansAdImage from '../../images/jeansad.png';
import WearAdImage from '../../images/wearad.png';

const Ad = ({type}) => (
    <AdWrapper>
        <img src={type === 'jeans'? JeansAdImage : WearAdImage} alt="Jeans Ad" />
    </AdWrapper>

)

export default Ad;