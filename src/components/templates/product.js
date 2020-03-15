import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../seo';
import Layout from '../layout';
import { SectionWrapper } from '../common/SectionWrapper';
import { ProductWrapper } from './styles/ProductWrapper';

import SimpleReactLightbox from "simple-react-lightbox"; // Import Simple React Lightbox
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper


const productTemplate = ({ data: { product } }) => {

    return (
        <Layout>
            <SEO title="Produkt" keywords={['ny york', 'shop', 'product']} />
			<SimpleReactLightbox>
				<SectionWrapper>
					<ProductWrapper>
						<div className="left">
							<div className="image">
								<SRLWrapper>
									<div className="thumbs">
										<div className="image_small">
											<img src={product.images[0].localFile.childImageSharp.fluid.src} alt={product.name} />
										</div>						
										<div className="image_small">
											<img src={product.images[1].localFile.childImageSharp.fluid.src} alt={product.name} />
										</div>
										<div className="image_small">
											<img src={product.images[2].localFile.childImageSharp.fluid.src} alt={product.name} />
										</div>
										<div className="image_small">
											<img src={product.images[3].localFile.childImageSharp.fluid.src} alt={product.name} />
										</div>
									</div>

								</SRLWrapper>
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
			</SimpleReactLightbox>
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
                        src
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
