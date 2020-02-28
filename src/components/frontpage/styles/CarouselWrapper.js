import styled from 'styled-components';
import nyYorkColors from '../../constants/colors';

export const CarouselWrapper = styled.div`

div.overlay {
    width: 100%;
    position: relative;
    text-align: left;
    background-color: rgba(43,18,16,0.5);
    position: absolute;
    bottom:0;
    padding: 30px 40px;       
    @media screen and (max-width: 415px){
        position: relative;

    }    

    h1 {
        font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-style: italic;

        color: ${nyYorkColors.yellow};;
        @media screen and (max-width: 415px){
            font-size: 1.3rem;
        }    
    }

    div.content {
        font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
        font-weight: 200;
        @media screen and (max-width: 415px){
            font-size: 0.9rem;
        }    
    }
}

`;
