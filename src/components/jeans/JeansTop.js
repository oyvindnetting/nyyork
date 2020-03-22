import React from 'react';
import jeansTopImage from '../../images/jeans_top.png';
import { JeansTopWrapper } from './styles/JeansTopWrapper';

const JeansTop = ({data}) => (
    <JeansTopWrapper data={data}>
        <div className="content">
            <img src={jeansTopImage} alt="WEAR" />
        </div>
    </JeansTopWrapper>
);

export default JeansTop;