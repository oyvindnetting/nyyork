import React from 'react';
import { ShopWrapper } from './styles/ShopWrapper';
import { Link } from 'gatsby';

import jeansImage from '../../images/jeansshop.jpg';
import wearImage from '../../images/shadesshop.jpg';
import emptyShoppingBag from '../../images/empty_bag.svg';

const ShopShortcuts = () => (
    <ShopWrapper>
        <div className="heading">
            <img src={emptyShoppingBag} alt="empty shopping bag" />
            <span>SHOP</span>
            <div className="subtitle">Sjekk ut hva vi har til salgs i nettbutikken</div>
        </div>
        <div className="shopping_wrapper">
            <div className="shoplink jeans_shop">
                <Link to="/shop">
                    <img src={jeansImage} alt="Jeans" />
                </Link>
                <div className="title">
                    JEANS
                </div>
            </div>
            <div className="shoplink shades_shop">
                <Link to="/shop">
                    <img src={wearImage} alt="Shades" />
                </Link>
                <div className="title">
                    SHADES
                </div>
            </div>
        </div>
    </ShopWrapper>
)

export default ShopShortcuts;