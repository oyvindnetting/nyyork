import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import ShopProduct from './ShopProduct';
import { ShopProductsWrapper } from './styles/ShopProductsWrapper';


const ShopProducts = () => {

    const {
        products: { edges: products },
      } = useStaticQuery(graphql`
        query products {
          products:  allShopifyProduct {
                edges {
                    node {
                        id
                        title
                        descriptionHtml
                        handle
                        productType
                        images {
                            localFile {
                                childImageSharp {
                                    fluid {
                                        src
                                    }
                                }
                            }
                        }
                        priceRange {
                            minVariantPrice {
                                amount
                                currencyCode
                            }
                            maxVariantPrice {
                                amount
                                currencyCode
                            }
                        }
                    }
                }
            }
        
        }
      `);

    console.log(products);
    return (
        <ShopProductsWrapper>
            {products.map((product, i) => (
                <ShopProduct product={product} key={i} />
            ))};
        </ShopProductsWrapper>
    );
}


ShopProducts.propTypes = {
    theme: PropTypes.object
  }

export default ShopProducts;