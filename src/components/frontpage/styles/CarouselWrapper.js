import styled from 'styled-components';


export const CarouselWrapper = styled.div`

div.overlay {
    width: 100%;
    position: relative;

    background-color:  ${props => props.theme.pink};
    position: absolute;
    bottom:0;
    padding: 30px 40px;       
    @media screen and (max-width: 415px){
        position: relative;
        background-color: ${props => props.theme.pink};
    }    

    h1 {
        font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
        font-weight: 800;
        font-style: italic;
        color: ${props => props.theme.yellow};;
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
