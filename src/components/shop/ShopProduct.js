import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { ShopProductWrapper } from "./styles/ShopProductWrapper";

const ShopProduct = ({ product }) => {

  const productLink = "https://nyyorkvintage.myshopify.com/collections/jeans/products/" + product.node.handle;
  
  let desc = product.node.descriptionHtml.substring(0, 400);
  var n = desc.lastIndexOf(". ");
  let descTrimmed = desc.substring(n+1,-1);

  return (
    <ShopProductWrapper>
      <div className="product">
        <div className="image">
          <a href={productLink} target="_blank">
            <img
              src={product.node.images[0].localFile.childImageSharp.fluid.src}
              alt={product.node.title}
            />
          </a>
          <div className="product_title">{product.node.title}</div>
		  <div
            className="price"
          >{product.node.priceRange.minVariantPrice.amount.substring(0,product.node.priceRange.minVariantPrice.amount.length - 2) } kr</div>
        </div>
        <div className="content">
          <div
            className="short_desc"
            dangerouslySetInnerHTML={{ __html: descTrimmed }}
          ></div>

          <a href={productLink} target="_blank">LES MER OM PRODUKTET</a>
        </div>
      </div>
    </ShopProductWrapper>
  );
};

ShopProduct.propTypes = {
  product: PropTypes.object
};

export default ShopProduct;
