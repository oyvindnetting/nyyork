import React from 'react';
import jeansTopImage from '../../images/jeans_top.png';
import { JeansTopWrapper } from './styles/JeansTopWrapper';

const JeansTop = () => (
    <JeansTopWrapper>
        <div class="content">
            <img src={jeansTopImage} alt="WEAR" />
        </div>
    </JeansTopWrapper>
);

export default JeansTop;