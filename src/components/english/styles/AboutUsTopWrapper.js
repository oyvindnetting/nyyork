

import styled from 'styled-components';
import omOssTopBackground from '../../../images/english_top_background.jpg';
import { dropShadow } from '../../common/mixins';

export const AboutUsTopWrapper = styled.div`

    background-image: url(${props => props.data[0].node.acf.toppbilde.localFile.childImageSharp.fluid.src});
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