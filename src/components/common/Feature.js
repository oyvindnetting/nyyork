import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { FeatureWrapper } from './styles/FeatureWrapper';

const Feature = ({color, bgColor, data}) => {

    
    const featureLink = "/articles/"+data[0].node.acf.featureartikkel_1.post_name;
    return(
        <FeatureWrapper color={color} bgColor={bgColor}>
        <div className="content">
            <h2><span>FEATURE:</span>{data[0].node.acf.featureartikkel_1.post_title}</h2>
            <div>
                {data[0].node.acf.featureartikkel_1.post_excerpt}
            </div>
            <Link to={featureLink}>LES MER</Link>
        </div>
        <div className="image">
            <img src={data[0].node.acf.featurebilde1_liten.localFile.childImageSharp.fluid.src} alt={data[0].node.acf.featureartikkel_1.post_title} />
        </div>
    </FeatureWrapper>
    );
}
     

Feature.propTypes = {
    color: PropTypes.string,
    bgColor: PropTypes.string,
    data: PropTypes.array.isRequired
}


export default Feature;