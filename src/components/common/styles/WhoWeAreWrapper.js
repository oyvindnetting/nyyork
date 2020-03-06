import styled from 'styled-components';

import bgImage from '../../../images/who_we_are_background.png';
import bgImagePink from '../../../images/who_we_are_background_pink.png';

import nyYorkColors from '../../constants/colors';

export const WhoWeAreWrapper = styled.div`


        background-image: url(${props => ((props.color === 'pink') ? bgImagePink: bgImage)});
        background-repeat:no-repeat;
        background-size:100%;      
        position: relative;
        width: 70%;
        display: flex;
        flex-direction: row;
        padding: 10px;

        @media screen and (max-width: 1024px){
            width: 98%;
        }

        @media screen and (max-width: 768px){
            background-size: 200%  130%;

        }


        @media screen and (max-width: 415px){
            flex-direction: column-reverse;
            background-color: ${nyYorkColors.gray};
            border: 3px solid ${nyYorkColors.yellow};
            text-align: center;
         
        }
        
        div.content {
            padding: 25px 30px;
            h2 {
                font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
                font-weight: 600;
                color: ${nyYorkColors.yellow};
                font-size: 2.1rem;
                margin-bottom: 10px;

            }
            div {
        
                color: ${nyYorkColors.beige};
                font-size: 0.9rem;
                font-weight: bold;
                width: 90%;
                @media screen and (max-width: 415px){
                    width: 100%;
                }
            }
        }

        div.image {
            width: 40%;
            margin: 12px;
            img {
                -webkit-box-shadow: -10px 2px 14px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: -10px 2px 14px 0px rgba(0,0,0,0.75);
                box-shadow: -10px 2px 14px 0px rgba(0,0,0,0.75);
            
                max-width: 320px;
            
            }

            @media screen and (max-width: 415px){
                width: 99%;
            }
        }

        &:after {
                padding-top: 47%;
                display: block;
                content: '';

          
                @media screen and (max-width: 415px){
                    padding-top: 3%;
                }
        }

`;
