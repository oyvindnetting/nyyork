import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FeatureAlternateWrapper } from './styles/FeatureAlternateWrapper';


const FeatureAlternate = ({color, bgColor, data}) => {
    
    const featureLink = (data[0].node.acf.featureartikkel_2  === undefined) ? "/articles/"+data[0].node.acf.featureartikkel_1.post_name :  "/articles/"+data[0].node.acf.featureartikkel_2.post_name;
    const featureBilde = (data[0].node.acf.featurebilde2_liten === undefined) ? data[0].node.acf.featurebilde1_liten.localFile.childImageSharp.fluid.src : data[0].node.acf.featurebilde2_liten.localFile.childImageSharp.fluid.src;
    const featureTitle =  (data[0].node.acf.featureartikkel_2 === undefined) ? data[0].node.acf.featureartikkel_1.post_title : data[0].node.acf.featureartikkel_2.post_title;
    const featureExcerpt = (data[0].node.acf.featureartikkel_2 === undefined) ? data[0].node.acf.featureartikkel_1.post_excerpt : data[0].node.acf.featureartikkel_2.post_excerpt;
    return (
        <FeatureAlternateWrapper color={color} bgColor={bgColor}>
            <div className="image">
                <img src={featureBilde} alt={featureTitle} />
            </div>
            <div className="content">
                <h2><span>FEATURE:</span>{featureTitle}</h2>
                <div dangerouslySetInnerHTML={{ __html: featureExcerpt}}>
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