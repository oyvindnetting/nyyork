import React from 'react';
import StoreAdWearImage from '../../images/store_wear.jpg';
import { StoreAdWearWrapper } from './styles/StoreAdWearWrapper';

const StoreAdWear = () => (
    <StoreAdWearWrapper>
        <div className="content">
            <h3>VINTAGE WEAR</h3>

            <span>Åpningstider</span>
            Mandag - Lørdag<br />
            12.00–18.00<br />
            Søndag<br />
            Stengt<br />

            <span>Besøksadresse</span> 

            Thorvald Meyers gate 50<br />
            Oslo, Norway


        </div>
        <div className="image">
            <img src={StoreAdWearImage} alt="Wear Store" />
        </div>
    </StoreAdWearWrapper>
);

export default StoreAdWear;