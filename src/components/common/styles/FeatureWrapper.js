import styled from 'styled-components';

export const FeatureWrapper = styled.div`

    position: relative;
    width: 60%;
    display: flex;
    flex-direction: row;
    background-color: ${props => props.bgColor};
    border: 3px solid ${props => props.color};
    margin-right: 140px;

    @media screen and (max-width: 1200px){
        margin: 50px auto;
        margin-right: 260px;
    }
    @media screen and (min-width: 416px) and (max-width: 768px) {
        height: 400px;
    }

    @media screen and (max-width: 415px) {
        width: 100%;
        padding-bottom: 100px;
        flex-direction: column-reverse;

    }
    div.content {
        padding: 25px 0 25px 30px;
        width: 55%;
        @media screen and (max-width: 415px){
            width: 100%;
            text-align: left;

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
            color: ${props => props.color};
            font-size: 1rem;
            font-weight: bold;
            width: 90%;
        }

        a {
            position: absolute;
            display: block;
            left: 20px;
            bottom: 20px;
            @media screen and (max-width: 415px){
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                width: 300px;
    
            }
            background-color: ${props => props.color};
            border: 0;
            color: ${props => props.bgColor};
            padding: 8px 70px;
            font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
            font-weight: 700;
            font-size: 0.9rem;
        
            transition: transform .4s;
            &:hover {
                transform: scale(1.05); 
            }
        }
    }

    div.image {
        width: 35%;
        margin: 12px auto;
        @media screen and (max-width: 768px) {
            margin: auto;
        }
        @media screen and (max-width: 415px){
            width: 99%;
        }
        img {
            -webkit-box-shadow: -10px 2px 14px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: -10px 2px 14px 0px rgba(0,0,0,0.75);
            box-shadow: -10px 2px 14px 0px rgba(0,0,0,0.75);
        
            max-height: 310px;
            @media screen and (max-width: 415px){
                max-width: 100%;
            }

        }
    }

`;
