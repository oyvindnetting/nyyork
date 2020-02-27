
import styled from 'styled-components';
import { dropShadow } from '../mixins';

export const InstagramWrapper = styled.section`

        background-color: ${props => (props.bgColor)};
        padding-bottom: 50px;
        width: 100%;
        margin: 100px 0;
        padding: 0px 0 0px 0;

        div.heading {
            width: 100%;
            text-align: center;
            padding: 20px 0;

            span {
                font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
                font-weight: 400;
                font-style: italic;
                font-size: 2rem;
        
                a {
                    color: ${props => (props.theme.beige)};
                }
            }
        }
        div.insta_wrapper {

            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            
            @media screen and (max-width: 1200px){
                flex-direction: column;
            }

            div.image {
                position: relative;
                cursor: pointer;
                width: 48%;
                margin: 10px;
                border: 5px solid ${props => (props.theme.beige)};
                border-radius: 5px;
                ${dropShadow('-5px', '5px', '5px')};
                transition: transform .5s;


                @media screen and (max-width: 768px) {
                    width: 95%;                
                }




                img {
                    width: 100%;
                    
                }
                div.content {
                    opacity: 0;
                    background-color: $black;
                    background-color: rgba(43,18,16,0.5);
                    position: absolute;
                    bottom:0px;
                    padding: 30px 40px;  
                    transition: opacity .5s;
                    @media screen and (max-width: 415px) {
                        top: 30px;
                    }
                    &:hover {
                        opacity: 1;
                    }
                }
                &:hover {
                    transform: scale(1.03); 

                    div.content {
                        opacity: 1;
                    }
                }
            }  
        }
    
    }

`;
