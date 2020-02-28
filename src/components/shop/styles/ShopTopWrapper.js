

import styled from 'styled-components';
import { dropShadow } from '../../common/mixins';
import shopTopBackground from '../../../images/shop_top_background.jpg';

export const ShopTopWrapper = styled.div`

    background-image: url(${shopTopBackground});
    background-size: cover;
    background-repeat: no-repeat;
    ${dropShadow('5px', '5px', '5px')};

    div.content {
        
        padding: 200px 40px;
        @media screen and (max-width: 415px) {
            padding: 50px 0 20px 0;
        }

        img {
            width: 100%;
        }
    }
`;
