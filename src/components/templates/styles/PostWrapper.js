
import styled from 'styled-components';

export const PostWrapper = styled.article`

         background-color: ${props => props.theme.pink};
         display: flex;
         flex-direction: column;

          div.left {
              width: 100%;
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
                      color: ;
                      padding: 20px 0 5px 0;
                  }
                  div.logos {
                      img {
                          width: 55px;
                          margin-left: 10px;
                      }
         
                  }
                  margin: 20px;
              }
  
          } 
          div.right {
              width: 100%;
              div.heading {
                 background-color: ${props => props.theme.yellow};
                 padding: 40px 60px;
 
                 div.title {
                     font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
                     font-weight:200;
                     font-style: italic;
                     color: ${props => props.theme.black};
                     font-size: 5rem;
                     @media screen and (max-width: 415px) {
                         font-size: 3rem;
                     }
 
                 }
                 margin-top: -350px;
                 @media screen and (max-width: 415px) {
                     margin-top: 0px;
                 }
              }
  
              div.ingress {
                 margin: 35px;
                 font-size: 1.5rem;
                 ${props => props.theme.yellow};
                 background-color: ${props => props.theme.gray};
                 padding: 40px;
           
                 @media screen and (max-width: 415px) {
                     margin-top: 20px;
                 }
              }
  
              div.body {
                  margin: 35px;
                  margin-top:190px;
                  font-size: 1.2rem;
                  background-color: ${props => props.theme.gray};
                  padding: 40px;
  
              }
          } 
          padding-bottom: 200px;
          margin-bottom: 35px;

 
`;

       