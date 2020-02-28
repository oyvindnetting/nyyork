import React from 'react';
import PropTypes from 'prop-types';
import shopCategoryImage from '../../images/shop_category_top.png';
import { ShopCategoryWrapper } from './styles/ShopCategoryWrapper';



const ShopCategory = ({type}) => {
  
    return(
        <ShopCategoryWrapper>
        <div className="heading">
            <div className="image">
                <img src={shopCategoryImage} alt="Produkter" />
            </div>
        </div>
    </ShopCategoryWrapper>
    );
}

ShopCategory.propTypes = {
    type: PropTypes.string,
}

export default ShopCategory;