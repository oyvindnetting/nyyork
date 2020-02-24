import React, { useStaticQuery } from 'react';


const Carousel = () => {
    const {
        slides: { edges: slides },
      } = useStaticQuery(graphql`
        query slider {
          slides:  allWordpressAcfBildekarusell {
            edges {
              node {
                id
                acf {
                  bilde {
                    id
                    localFile {
                      childImageSharp {
                        fluid(quality: 100, maxWidth: 2000) {
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
      `)
      return (
        <>
           {slides.map((slide, i) => (
            <img src={slide.node.acf.bilde.localFile.childImageSharp.fluid.srcWebp} />
           
          ))}
        </>
      );
}

export default Carousel;