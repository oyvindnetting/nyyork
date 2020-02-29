import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { CarouselWrapper } from './styles/CarouselWrapper';


const ImageCarousel = () => {
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
                        fluid(quality: 100, maxWidth: 1200) {
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
        <CarouselWrapper>
          <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} autoPlay={true} interval={6000}>
            {slides.map((slide, i) => (
              <div key={slide.node.id}>
                <img src={slide.node.acf.bilde.localFile.childImageSharp.fluid.srcWebp} alt={slide.node.acf.tittel} />
                <div className="overlay">
                    <h1>{slide.node.acf.tittel}</h1>
                    <div className="content">
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

