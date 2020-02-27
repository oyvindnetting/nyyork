

import styled from 'styled-components';
import wearTopBackground from '../../../images/wear_top_background.jpg';

export const WearTopWrapper = styled.div`

background-image: url(${wearTopBackground});
background-size: cover;
background-repeat: no-repeat;
div.content {
    
    padding: 200px;
    @media screen and (max-width: 415px) {
        padding: 200px 0 20px 0;
    }

    img {
        width: 100%;
    }
}

`;
