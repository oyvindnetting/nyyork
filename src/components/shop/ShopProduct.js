import React from 'react';
import PropTypes from 'prop-types';

import { ShopProductWrapper } from './styles/ShopProductWrapper';

const ShopProduct = ({product}) => {
    const productLink = "/shop/"+product.node.slug;

    return (
        <ShopProductWrapper>
            <div className="product">
                <div className="image">
                    <img src={product.node.images[0].src} alt={product.node.images[0].alt} />
                    <div className="product_title">
                        {product.node.name}
                    </div>
                </div>
                <div className="content">
                    <button><a href={productLink}>LES MER OM PRODUKTET</a></button>
                </div>
            </div>
        </ShopProductWrapper>
    );
}


ShopProduct.propTypes = {
    product: PropTypes.object
  }


export default ShopProduct;