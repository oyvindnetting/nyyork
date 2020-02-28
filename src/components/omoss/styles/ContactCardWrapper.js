

import styled from 'styled-components';
import nyYorkColors from '../../constants/colors';
import { dropShadow } from '../../common/mixins';

export const ContactCardWrapper = styled.div`
   
        width: 40%;
        @media screen and (max-width: 415px) {
            width: 100%;
        }
        background-color: ${nyYorkColors.gray};
        margin: 20px 0;
        border-radius: 10px;
        border: 5px dotted orange;
        ${dropShadow('5px', '0', '5px')};
        text-align: center;
        padding: 30px 0;
        h2 {
            font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
            font-weight: 700;
            font-size: 2.3rem;
          
        }

        div.name {
            font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
            font-weight: 700;
            font-style: italic;
            font-size: 1.4rem;
            color: ${nyYorkColors.yellow};
        }
        a {
            color: ${nyYorkColors.yellow};
        }  
`;