import React from 'react';
import shopTopImage from '../../images/shop_top.png';
import { ShopTopWrapper } from './styles/ShopTopWrapper';

const ShopTop = () => (
    <ShopTopWrapper>
        <div className="content">
            <img src={shopTopImage} alt="SHOP" />
        </div>
    </ShopTopWrapper>
);

export default ShopTop;