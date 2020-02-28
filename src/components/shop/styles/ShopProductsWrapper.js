

import styled from 'styled-components';

export const ShopProductsWrapper = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 200px;

    @media screen and (max-width: 415px){
        flex-direction: column; 
    }

`;
