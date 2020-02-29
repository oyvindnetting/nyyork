import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { OpeningHoursWrapper } from './styles/OpeningHoursWrapper';

const OpeningHours = ({color, store}) => {

    

    const {
        data: { edges: data },
    } = useStaticQuery(graphql`
        query apningstider {
            data:  allWordpressAcfForside {
                edges {
                    node {
                        acf {
                            apningstider_wear
                            apningstider_jeans
                            
                        }
                    }
                }
            }
        }
    `);
    return (
        <OpeningHoursWrapper color={color}>
        {(store === 'wear') ? 
            <div dangerouslySetInnerHTML={{ __html: data[0].node.acf.apningstider_wear }}></div>

        : 
            <div dangerouslySetInnerHTML={{ __html: data[0].node.acf.apningstider_jeans }}></div>
            
        }
        </OpeningHoursWrapper>
    );

}

OpeningHours.propTypes = {
    color: PropTypes.string,
    store: PropTypes.string,
    data: PropTypes.array.isRequired
}

export default OpeningHours;


