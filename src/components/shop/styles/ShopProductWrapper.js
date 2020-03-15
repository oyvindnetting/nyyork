import styled from 'styled-components';
import nyYorkColors from '../../constants/colors';
import { dropShadow } from '../../common/mixins';

export const ShopProductWrapper = styled.div`
    max-width: 33%;
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media screen and (max-width: 415px) {
        max-width: 100%;
    }
    div.image {
        position: relative;
        cursor: pointer;

        img {
            width: 100%;
        }
        div.product_title {
    
            width: 100%;
            padding: 20px;
            background-color: ${nyYorkColors.pink};
            text-align: center;

            font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
            font-weight: 700;
            font-style: italic;
            font-size: 2.5rem;
            color: ${nyYorkColors.yellow};
            text-transform: uppercase;
        }

       ${dropShadow('0px', '5px', '5px')};

        transition: transform 0.5s;

        &:hover {
            transform: scale(1.03); 
        }

		div.price {
			text-align:center;
			background-color: ${nyYorkColors.black};
			font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
			font-size: 2.5rem;
			font-weight: 900;
			color: ${nyYorkColors.beige};
		}

    }

    div.content {
        background-color: ${nyYorkColors.gray};
        border: 1px solid ${nyYorkColors.black};
        &.--pink {
            background-color: ${nyYorkColors.pink};
        } 

        color: $beige;
        padding: 20px;
        font-size: 1.1rem;
        text-align: center;



        a {
            display: block;
            font-family: 'Poppins', 'Open Sans', Arial, Helvetica, sans-serif;
            font-weight: 600;
            outline: none;
            background-color: ${nyYorkColors.black};
            color: ${nyYorkColors.beige};
            border: 0;
            margin-top: 50px;
            padding: 10px 30px;
            cursor: pointer;
			${dropShadow('0px', '5px', '5px')};
            transition: transform 0.5s;
            &:hover {
                transform: scale(1.05); 
            }
        }
    }

`;
