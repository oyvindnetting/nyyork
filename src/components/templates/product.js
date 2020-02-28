import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../layout';
import { SectionWrapper } from '../common/SectionWrapper';
import { ProductWrapper } from './styles/ProductWrapper';



const productTemplate = ({ data: { product } }) => {

    return (
        <Layout>
            <SectionWrapper>
                <ProductWrapper>
                    <div className="left">
                        <div className="image">
                            <div className="product_image">
                                <img src={product.images[0].localFile.childImageSharp.fluid.srcWebp} alt={product.name} />
                            </div>
                            <div className="image_small">
                                <img src={product.images[1].localFile.childImageSharp.fluid.srcWebp} alt={product.name} />
                            </div>
                            <div className="image_small">
                                <img src={product.images[2].localFile.childImageSharp.fluid.srcWebp} alt={product.name} />
                            </div>
                            <div className="image_small">
                                <img src={product.images[3].localFile.childImageSharp.fluid.srcWebp} alt={product.name} />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <h1>{product.name}</h1>
                        <div className="price"><span>Pris: </span>{product.price} kr</div>
                        <div className="product_desc" dangerouslySetInnerHTML={{ __html: product.description}}>
                            
                        </div>
                        <div className="buy_button">
                            <input type="text" maxlength="1" value="1" />
                            <button>Kjøp</button>
                        </div>
                    </div>

                </ProductWrapper>
            </SectionWrapper>
        </Layout>
    );
}


productTemplate.propTypes = {
    data: PropTypes.object.isRequired
}

export default productTemplate;


export const pageQuery = graphql`
  query($id: String!) {
    product: wcProducts(slug: { eq: $id }) {
        id
        slug
        images {
            id
            localFile {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 1200) {
                        srcWebp
                    }
                }
            }

        }
        name
        price
        description
    }
  }
`;
