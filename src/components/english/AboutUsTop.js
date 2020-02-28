import React from 'react';
import englishTopImage from '../../images/english_top.png';
import { AboutUsTopWrapper } from './styles/AboutUsTopWrapper';

const AboutUsTop = () => (
    <AboutUsTopWrapper>
        <div className="content">
            <img src={englishTopImage} alt="About us" />
        </div>
    </AboutUsTopWrapper>
);

export default AboutUsTop;