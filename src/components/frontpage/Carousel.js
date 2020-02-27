import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { CarouselWrapper } from './styles/CarouselWrapper';



const ImageCarousel = ({theme}) => {
    const {
        slides: { edges: slides },
      } = useStaticQuery(graphql`
        query slider {
          slides:  allWordpressAcfBildekarusell {
            edges {
              node {
                id
                acf {
                  tittel
                  undertittel
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
      `);
      return (
        <CarouselWrapper theme={theme}>
          <Carousel showThumbs={false} showArrows={true} showStatus={true} infiniteLoop={true} autoPlay={true} interval={5000}>
            {slides.map((slide, i) => (
              <div>
                <img src={slide.node.acf.bilde.localFile.childImageSharp.fluid.srcWebp} />
                <div class="overlay">
                    <h1>{slide.node.acf.tittel}</h1>
                    <div class="content">
                      {slide.node.acf.undertittel}
                    </div>
                </div>
              </div>
            ))}
  
          </Carousel>
        </CarouselWrapper>


      );
}

export default ImageCarousel;

