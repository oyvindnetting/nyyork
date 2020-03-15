
import styled from 'styled-components';
import nyYorkColors from '../../constants/colors';
import { dropShadow } from '../../common/mixins';

export const ProductWrapper = styled.article`
 background-image: url('/dist/images/product_background.png');
    background-size: cover;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 415px){
        flex-direction: column;
    }


    div.left {
        width: 50%;
        padding: 50px;


        @media screen and (max-width: 415px){
            width: 100%;
        }
    
        div.image {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
			margin: auto;

            div {
                margin: 10px 5px;
    
            }

            div.product_image {
                width: 100%;
                img {
                    width: 100%;
                    border: 2px solid ${nyYorkColors.beige};
                }
            }

			div.thumbs {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-around;
				margin: 0;
				padding: 0;
				div.image_small {
					width: 47%;
					float:right;
					cursor: pointer;

					img {
						width: 100%;
						border: 2px solid ${nyYorkColors.beige};
					}
				}


			}

        }
    }

    div.right {
        text-align: right;
        width: 50%;
        padding: 150px 50px 50px 50px;



        @media screen and (max-width: 415px){
            text-align: left;
            width: 100%;
        } 
        
        h1 {
            font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
            font-weight: 800;
            font-size: 4rem;;
            color: ${nyYorkColors.yellow};
        }
        div.price {
            font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
            font-weight: 700;
            font-size: 2.5rem;
            color: ${nyYorkColors.yellow};
            span {
                letter-spacing: 1.1px;
                color: ${nyYorkColors.gray};
                -webkit-text-stroke-width: 1px;
                -webkit-text-stroke-color: ${nyYorkColors.yellow};
            }
        }

        div.product_desc {
            font-size: 1.3rem;
			color: ${nyYorkColors.beige};	
			th, td {
				color: ${nyYorkColors.beige};	
			} 

        }

        div.buy_button {
   
            font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
            font-weight: 700;
            height: 100px;
            display: flex;
            flex-direction: row;
            margin:100px auto 100px 0;
      


            input {
                background-color: ${nyYorkColors.beige};
                height: 90%;
                font-size: 3.5rem;
                max-width: 100px;
                text-align: center;
                margin-left: auto;
            }

            button {
                height: 100%;
                padding: 0 80px;
                border: 0;
                outline: none;
                cursor: pointer;
                background-color: ${nyYorkColors.pink};
                color: ${nyYorkColors.beige};
                font-size: 2.5rem;
                transition: transform 0.5s;
                &:hover {
                    transform: scale(1.05); 
                }

                ${dropShadow('-5px','0', '5px')};



                @media screen and (max-width: 415px){
                    padding: 0 20px;
                } 
                
            }
        }
    }
 
`;

       