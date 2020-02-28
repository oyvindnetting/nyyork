

import styled from 'styled-components';
import nyYorkColors from '../../constants/colors';
import { dropShadow } from '../../common/mixins';

export const StoreAdWearWrapper = styled.div`

        display: flex;
        flex-direction: row;
        margin-bottom: 100px;
        @media screen and (max-width: 415px) {
            flex-direction: column;
        }

        div.content {
            padding-top: 100px;
            background-color: ${nyYorkColors.brown};
            text-align: center;
            width: 30%;
            @media screen and (max-width: 415px) {
                width: 100%;
                padding: 40px 0;
            }
            z-index: 10;
            ${dropShadow('5px','5px','5px')};

            h3 {
                color: ${nyYorkColors.orange};
                font-weight: 700;
                font-size: 2rem;
                }
            span {
                font-weight: bold;
                margin: 20px auto;
                display: block;
            }
        }
        div.image {
            z-index:1;
            width: 70%;
            @media screen and (max-width: 415px) {
                width: 100%;
            }
            img {
                width: 100%;
            }
        }

        &.jeans {
            div.content {
                background-color: ${nyYorkColors.gray};
                ${dropShadow('-5px','5px','5px')};

                h3 {
                    color: ${nyYorkColors.yellow};
                }

            }
        }

`;