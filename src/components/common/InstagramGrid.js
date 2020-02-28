import React from 'react';
import PropTypes from 'prop-types';
import { InstagramWrapper } from './styles/InstagramWrapper';
import { useStaticQuery, graphql } from 'gatsby';



const InstagramGrid = ({bgColor}) => {
    const {   instaImages: { edges: instaImages },
    } = useStaticQuery(graphql`
    query instagram {
        instaImages:  allInstaNode {
            edges {
                node {
                    id
                    likes
                    comments
                    mediaType
                    preview
                    original
                    timestamp
                    caption
                    localFile {
                        childImageSharp {
                            fixed(width: 400, height: 400) {
                            ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    # Only available with the public api scraper
                    thumbnails {
                    src
                    config_width
                    config_height
                    }
                    dimensions {
                    height
                    width
                    }
                }
            }
        }
    }
    `);
    var lastFourImages = instaImages.slice(0,4);
return(
    <InstagramWrapper bgColor={bgColor}>
        <div className="heading">
            <span><a href="#">@vintagewearbyny</a></span>
        </div>
        <div className="insta_wrapper">

        {
            lastFourImages.map((instaImage, i) => (
            <div className="image" key={instaImage.node.id}>
                <img src={instaImage.node.localFile.childImageSharp.fixed.src} alt="Instagram image 1" />
                <div className="content" dangerouslySetInnerHTML={{ __html: instaImage.node.caption }} >
                </div>
            </div>
                ))}
    
        </div>
    </InstagramWrapper>

);
}


InstagramGrid.propTypes = {
    bgColor: PropTypes.string
}


export default InstagramGrid;