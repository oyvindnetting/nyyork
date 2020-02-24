import styled from 'styled-components';
//import Img from 'gatsby-image';


export const LayoutWrapper = styled.div`
/* GENERAL STYLES, RESETS AND LAYOUT */

    max-width: 1200px;

    @media screen and (max-width: 1200px) {
        max-width: 100vw;
    }

    border: 1px solid black;
    margin: 0 auto;
    position: relative;
    background-color: $beige;

`;
