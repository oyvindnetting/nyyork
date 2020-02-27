import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { FeatureWrapper } from './styles/FeatureWrapper';

import FeatureImage from '../../images/feature_image2.jpg';

const Feature = ({color, bgColor}) => {
    const {
        data: { edges: data },
    } = useStaticQuery(graphql`
        query feature1 {
            data:  allWordpressAcfForside {
                edges {
                    node {
                        acf {
                            featureartikkel_1 {
                                post_title
                                post_excerpt
                            }
                        }
                    }
                }
            }
        }
    `);

    return(
        <FeatureWrapper color={color} bgColor={bgColor}>
        <div className="content">
            <h2><span>FEATURE:</span>{data[0].node.acf.featureartikkel_1.post_title}</h2>
            <div>
                {data[0].node.acf.featureartikkel_1.post_excerpt}
            </div>
            <button>LES MER</button>
        </div>
        <div className="image">
            <img src={FeatureImage} alt="Feature image 2" />
        </div>
    </FeatureWrapper>
    );
}
    


export default Feature;