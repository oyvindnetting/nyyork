
import styled from 'styled-components';
import { dropShadow } from '../mixins';

export const AdWrapper = styled.div`

    width: 25%;
    transition: transform .4s;

    &:hover {
        transform: scale(1.05); 
    }
    cursor: pointer;
    img {
        ${dropShadow('5px', '5px', '5px')};
        width: 100%;
    }

    @media screen and (max-width: 1200px){
        width: 70%;
        margin: 50px auto;
    }

`;
