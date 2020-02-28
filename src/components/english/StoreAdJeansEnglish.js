import React from 'react';
import StoreAdJeansImage from '../../images/store_jeans.jpg';
import { StoreAdJeansWrapper } from './styles/StoreAdJeansWrapper';

const StoreAdJeansEnglish = () => (
    <StoreAdJeansWrapper>
        <div class="image">
            <img src={StoreAdJeansImage} alt="Jeans Store" />
        </div>
        <div class="content">
            <h3>VINTAGE JEANS</h3>

            <span>Opening hours</span>
            Monday, Thursday, <br />
            Friday, Saturday<br />
            14.00–18.00<br />

            <span>Visiting address</span>

            Rathkesgate 7<br />
            Oslo, Norway

        </div>
    </StoreAdJeansWrapper>
);

export default StoreAdJeansEnglish;