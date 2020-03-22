

import styled from 'styled-components';
import jeansTopBackground from '../../../images/jeans_top_background.jpg';

export const JeansTopWrapper = styled.div`

background-image: url(${props => props.data[0].node.acf.toppbilde.localFile.childImageSharp.fluid.src});
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
