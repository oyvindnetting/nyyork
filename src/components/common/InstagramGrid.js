import React from 'react';
import { InstagramWrapper } from './styles/InstagramWrapper';
import { useStaticQuery, graphql } from 'gatsby';



const InstagramGrid = ({theme, bgColor}) => {
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
                            fluid(quality: 100, maxWidth: 500) {
                                srcWebp
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
    <InstagramWrapper theme={theme} bgColor={bgColor}>
    <div className="heading">
        <span><a href="#">@vintagewearbyny</a></span>
    </div>
    <div className="insta_wrapper">

    {
        lastFourImages.map((instaImage, i) => (
        <div className="image">
            <img src={instaImage.node.localFile.childImageSharp.fluid.srcWebp} alt="Instagram image 1" />
            <div className="content" dangerouslySetInnerHTML={{ __html: instaImage.node.caption }} >
            </div>
        </div>
            ))}
  
    </div>
</InstagramWrapper>

);
}


export default InstagramGrid;