import styled from 'styled-components';
//import Img from 'gatsby-image';
import pinkBackground from '../../../images/opening_hours_pink.png';
import grayBackground from '../../../images/opening_hours_gray.png';

import nyYorkColors from '../../constants/colors';

export const OpeningHoursWrapper = styled.div`
    width: 27%;

    background-image: ${props => 
        ((props.color === 'pink') &&  `url(${pinkBackground})` ) || ((props.color === 'gray')&&  `url(${grayBackground})` )
    };
    background-repeat:no-repeat;
    background-size:100%;      
    position: relative;
    padding: 40px 55px;

    color: ${props => 
        ((props.color === 'pink') && nyYorkColors.beige) || ((props.color === 'gray') && nyYorkColors.beige) 
    };
    font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 0.9rem;


    @media screen and (max-width: 1200px){
        width: 50%;
        font-size: 1.3rem;
        padding: 90px;
    }

    @media screen and (max-width: 768px){
        width: 60%;
        font-size: 1.1rem;
        padding: 90px;
        margin: 100px 0;
    }

    @media screen and (max-width: 415px){
        width: 90%;
        font-size: 0.9rem;
        padding: 70px;
        margin: 100px 0;
    }

    @media screen and (max-width: 320px){
        font-size: 0.7rem;
        margin: 10px 0;
    }   

    span {
        font-weight: 300;
        font-style: italic;
    }     
    &:after {
        padding-top: 5%;
        display: block;
        content: '';
        @media screen and (max-width: 1200px){
            padding-top: 60%;
        }
        
    }
`;
