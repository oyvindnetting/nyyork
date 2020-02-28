import React from 'react';
import StoreAdWearImage from '../../images/store_wear.jpg';
import { StoreAdWearWrapper } from './styles/StoreAdWearWrapper';

const StoreAdWearEnglish = () => (
    <StoreAdWearWrapper>
        <div class="content">
            <h3>VINTAGE WEAR</h3>

            <span>Opening hours</span>
            Monday - Saturday<br />
            12.00–18.00<br />
            Sunday<br />
            Closed<br />

            <span>Visiting address</span> 

            Thorvald Meyers gate 50<br />
            Oslo, Norway


        </div>
        <div class="image">
            <img src={StoreAdWearImage} alt="Wear Store" />
        </div>
    </StoreAdWearWrapper>
);

export default StoreAdWearEnglish;