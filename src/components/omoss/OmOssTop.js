import React from 'react';
import omOssTopImage from '../../images/omoss_top.png';
import { OmOssTopWrapper } from './styles/OmOssTopWrapper';

const OmOssTop = ({data}) => (
    <OmOssTopWrapper data={data}>
        <div className="content">
            <img src={omOssTopImage} alt="Om oss" />
        </div>
    </OmOssTopWrapper>
);

export default OmOssTop;