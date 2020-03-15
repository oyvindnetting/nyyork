import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { ShopProductWrapper } from "./styles/ShopProductWrapper";

const ShopProduct = ({ product }) => {
  const productLink = "/shop/" + product.node.slug;

  return (
    <ShopProductWrapper>
      <div className="product">
        <div className="image">
          <Link to={productLink}>
            <img
              src={product.node.images[0].src}
              alt={product.node.images[0].alt}
            />
          </Link>
          <div className="product_title">{product.node.name}</div>
		  <div
            className="price"
          >{product.node.price } kr</div>
        </div>
        <div className="content">
          <div
            className="short_desc"
            dangerouslySetInnerHTML={{ __html: product.node.short_description }}
          ></div>

          <Link to={productLink}>LES MER OM PRODUKTET</Link>
        </div>
      </div>
    </ShopProductWrapper>
  );
};

ShopProduct.propTypes = {
  product: PropTypes.object
};

export default ShopProduct;
