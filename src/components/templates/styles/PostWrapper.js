
import styled from 'styled-components';
import nyYorkColors from '../../constants/colors';

export const PostWrapper = styled.article`

background-color: ${nyYorkColors.gray};
        display: flex;
        flex-direction: row;
        @media screen and (max-width: 415px) {
            flex-direction: column;
        }
         div.left {
             width: 50%;
             @media screen and (max-width: 415px) {
                 width: 100%;
             }
             div.image {
 
                 img {
                     width: 100%;
                 }
             }
             div.some {
                 text-align: right;
                 h3 {
                     font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
                     font-weight: 800;
                     color: $beige;
                     padding: 20px 0 5px 0;
                 }
                 div.logos {
                     img {
                         width: 55px;
                         margin-left: 10px;
                     }
                 }
                 padding: 15px;
             }
 
         } 
         div.right {
             width: 50%;
             @media screen and (max-width: 415px) {
                 width: 100%;
             }
             div.heading {
                 background-color: ${nyYorkColors.yellow};
                 padding: 40px 60px;
                 margin: 35px 35px auto -210px;
                 @media screen and (max-width: 415px) {
                     margin: 10px;
                 }
                 div.title {
                     font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
                     font-weight:200;
                     font-style: italic;
                     color: ${nyYorkColors.black};
                     font-size: 5rem;
                     text-transform: uppercase;
                     @media screen and (max-width: 415px) {
                         font-size: 3rem;
                     }
     
                 }
             }
 
             div.ingress {
                 margin: 35px;
                 font-size: 1.5rem;
                 color: ${nyYorkColors.yellow};
             }
 
             div.body {
                 margin: 35px;
                 font-size: 1.2rem;
 
             }
         } 
         padding-bottom: 200px;
         margin-bottom: 35px;
 
`;

       