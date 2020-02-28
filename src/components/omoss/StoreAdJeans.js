import React from 'react';
import StoreAdJeansImage from '../../images/store_jeans.jpg';
import { StoreAdJeansWrapper } from './styles/StoreAdJeansWrapper';

const StoreAdJeans = () => (
    <StoreAdJeansWrapper>
        <div class="image">
            <img src={StoreAdJeansImage} alt="Jeans Store" />
        </div>
        <div class="content">
            <h3>VINTAGE JEANS</h3>

            <span>Åpningstider</span>
            Mandag, Torsdag, <br />
            Fredag, Lørdag<br />
            14.00–18.00<br />

            <span>Besøksadresse</span>

            Rathkesgate 7<br />
            Oslo, Norway

        </div>
    </StoreAdJeansWrapper>
);

export default StoreAdJeans;