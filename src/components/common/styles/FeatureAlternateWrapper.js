import styled from 'styled-components';
import nyYorkColors from '../../constants/colors'; 

export const FeatureAlternateWrapper = styled.div`

    background-color: ${props => props.bgColor};
    border: 3px solid ${props => props.color};
    margin-right: 0px;
    display: flex;
    flex-direction: row;
    margin-left: 150px;
    width: 60%;


    @media screen and (max-width: 1200px){
        margin: 50px auto;
        margin-left: 260px;
    }

    @media screen and (max-width: 768px) {
        height: 400px;
    }


    @media screen and (max-width: 415px){
        width: 100%;
        padding-bottom: 100px;
        margin:0;
        display: flex;
        flex-direction: column;
        height: 190%;

    }
    div.content {
        padding: 25px 30px;
        width: 65%;
        margin-left: 170px;
        text-align: right;
        position: relative;

        @media screen and (max-width: 415px){
            width: 100%;
            text-align: center;
            margin-left: 0;
        }
    
        h2 {
            font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
            font-weight: 800;
            color: ${props => props.color};
            font-size: 2.2rem;
            margin-bottom: 10px;
            text-transform: uppercase;
            span {
                color: ${props => props.bgColor};
                -webkit-text-stroke-width: 1px;
                -webkit-text-stroke-color: ${props => props.color};

                display: inline-block;
                margin-right: 5px;
                letter-spacing: 1.1px;
            }

        }
        div {
            color: ${nyYorkColors.beige};
            font-size: 1rem;
            font-weight: bold;
  
          
        }

        a {
            
            position: absolute;
            right: 20px;
            bottom: 20px;
            left: auto;
            background-color: ${props => props.color};
            border: 0;
            color: ${nyYorkColors.black};
            padding: 8px 70px;
            font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
            font-weight: 700;
            font-size: 0.9rem;

            @media screen and (max-width: 415px){
                left: 0;
                right: 0;
                bottom:-10%;
                margin-left: auto;
                margin-right: auto;
                width: 300px;
    
            }

            transition: transform .4s;
            &:hover {
                transform: scale(1.05); 
            }
        }
    }

    div.image {
        width: 35%;
        margin: 10px 35px 10px -150px;

        @media screen and (max-width: 768px) {
            margin-left: -250px;
        }

        @media screen and (max-width: 415px){
            width: 99%;
            margin: 0;
        }
        img {
            -webkit-box-shadow: 10px 2px 14px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 2px 14px 0px rgba(0,0,0,0.75);
            box-shadow: 10px 2px 14px 0px rgba(0,0,0,0.75);
        
            max-height: 310px;
            @media screen and (max-width: 415px){
                max-width: 100%;
            }
            
        }
    }


`;
