import React from 'react';
import wearTopImage from '../../images/wear_top.png';
import { WearTopWrapper } from './styles/WearTopWrapper';

const WearTop = ({data}) => (
    <WearTopWrapper data={data}>
        <div className="content">
            <img src={wearTopImage} alt="WEAR" />
        </div>
    </WearTopWrapper>
);

export default WearTop;