import styled from 'styled-components';

import bgImage from '../../../images/whereis_background.png';
import bgImageTablet from '../../../images/mobile_whereis_background.png';
import bgImageMobile from '../../../images/mobile_whereis_background_415.png';

import nyYorkColors from '../../constants/colors';

export const WhereIsWrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    @media screen and (min-width: 1024px) {
        margin-bottom: 20px;
    }
    div.where_is_background {

        background-size: 100%;      
        padding-bottom: 50px ;
        position: relative;
        z-index: 1;

        .bgImage {
            position: absolute;
            left:0;
            top:0;
            z-index: -1;
            width: 60%;
            @media screen and (max-width: 768px){
                transform: rotate(90deg);
                position:relative;
                width: 160%;
                left:-30%;
            }
            img {
                width: 100%;
            }
        }
        .nyYorkMap {
            position: absolute;
            right:0;
            top:7%;
            z-index: -3;
            width: 65%;
            height: 80%;
            border: 30px solid #66768c;
            @media screen and (max-width: 768px){
                border: 10px solid #66768c;
                width: 140%;
                overflow: hidden;
         
            }
        }
        @media screen and (max-width: 1200px){
       
            background-size:100%;  
            background-position-x: center;
            margin: 50px 0;
            width: 100%;
        }

        @media screen and (max-width: 768px){
            background-size: 130%  130%;

        }
        @media screen and (max-width: 415px){
       
            padding-bottom: 400px;
            background-size: cover;
            background-repeat: no-repeat;
        }  
        
        background-repeat:no-repeat;
        position: relative;
        z-index: 10;
        
        div.content {
            padding: 80px 25px;
            z-index: 20;
            width: 40%;
            
            @media screen and (max-width: 768px){
                background-color: rgba(100,100,100,0.5);
         
                           
                width: 100%;
                margin: 200px 0;
            }
             
            a {
                color: {nyYorkColors.pink} !important;
            }

          
            h2 {
                font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
                font-weight: 800;
                color: ${nyYorkColors.pink};
                font-size: 1.4rem;
                margin-bottom: 10px;
                @media screen and (max-width: 768px){
                    font-size: 2rem;
                    padding: 10px;
                }
                @media screen and (max-width: 415px){
                    font-size: 1.5rem;
                    padding: 10px;
                }
    
    
            }
            div {

                font-size: .9rem;
                color: ${nyYorkColors.black};
                font-weight: bold;

                a {
                    color: ${nyYorkColors.pink};
                }

                @media screen and (max-width: 1200px){
                    width:100%;
               
                    font-size: 1.5rem;
                }
                @media screen and (max-width: 415px){
                    font-size: 0.9rem;
     
                }
                @media screen and (max-width: 320px){
                    font-size: 0.9rem;
                }
            }

            @media screen and (max-width: 1200px){
                padding: 80px 150px;
            }
            @media screen and (max-width: 768px){
                padding: 50px 120px;
            }

            @media screen and (max-width: 415px){
                padding: 50px;
            }
        }

        &:after {
                padding-top: 20%;
                @media screen and (max-width: 1200px){ 
                    padding-top: 20%;
                }
                display: block;
                content: '';
        }

    
    }
 
`;
