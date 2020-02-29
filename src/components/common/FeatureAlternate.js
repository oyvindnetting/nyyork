import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FeatureAlternateWrapper } from './styles/FeatureAlternateWrapper';


const FeatureAlternate = ({color, bgColor}) => {
    const {
        data: { edges: data },
    } = useStaticQuery(graphql`
        query feature2 {
            data:  allWordpressAcfForside {
                edges {
                    node {
                        acf {
                            featureartikkel_2 {
                                post_title
                                post_excerpt
                                post_name
                       
                            }
                            featurebilde2_liten {
                                id
                                localFile {
                                    childImageSharp {
                                        fluid(quality: 100, maxWidth:500) {
                                            srcWebp
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const featureLink = "/articles/"+data[0].node.acf.featureartikkel_2.post_name;

    return (
        <FeatureAlternateWrapper color={color} bgColor={bgColor}>
            <div className="image">
                <img src={data[0].node.acf.featurebilde2_liten.localFile.childImageSharp.fluid.srcWebp} alt={data[0].node.acf.featureartikkel_2.post_title} />
            </div>
            <div className="content">
                <h2><span>FEATURE:</span>{data[0].node.acf.featureartikkel_2.post_title}</h2>
                <div dangerouslySetInnerHTML={{ __html: data[0].node.acf.featureartikkel_2.post_excerpt}}>
                </div>
                <Link to={featureLink}>LES MER</Link>
            </div>
        </FeatureAlternateWrapper>
)};

FeatureAlternate.propTypes = {
    color: PropTypes.string,
    bgColor: PropTypes.string,
    data: PropTypes.array.isRequired
}

export default FeatureAlternate;