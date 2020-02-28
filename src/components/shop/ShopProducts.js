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
          products: allWcProducts {
                edges {
                    node {
                        id
                        slug
                        images {
                            id
                            src
                        }
                        name
                        price
                        description
                    }
                }
            }
        }
      `);
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