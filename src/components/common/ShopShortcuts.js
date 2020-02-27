import React from 'react';
import { ShopWrapper } from './styles/ShopWrapper';

import jeansImage from '../../images/jeansshop.jpg';
import wearImage from '../../images/shadesshop.jpg';
import emptyShoppingBag from '../../images/empty_bag.svg';

const ShopShortcuts = ({theme}) => (
    <ShopWrapper theme={theme}>
        <div class="heading">
            <img src={emptyShoppingBag} alt="empty shopping bag" />
            <span>SHOP</span>
            <div class="subtitle">Sjekk ut hva vi har til salgs i nettbutikken</div>
        </div>
        <div class="shopping_wrapper">
            <div class="shoplink jeans_shop">
                <img src={jeansImage} alt="Jeans" />
                <div class="title">
                    JEANS
                </div>
            </div>
            <div class="shoplink shades_shop">
                <img src={wearImage} alt="Shades" />
                <div class="title">
                    SHADES
                </div>
            </div>
        </div>
    </ShopWrapper>
)

export default ShopShortcuts;