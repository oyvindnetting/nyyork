import React from 'react';
import SEO from '../components/seo';

import { useStaticQuery, graphql } from 'gatsby';

import '../components/styles/styles.scss';
import nyYorkColors from '../components/constants/colors';

/* Import custom components */

import Layout from '../components/layout';
import ImageCarousel from '../components/frontpage/Carousel';
import OpeningHours from '../components/common/OpeningHours';
import WhereIs from '../components/common/WhereIs';
import WhoWeAre from '../components/common/WhoWeAre';
import Ad from '../components/common/Ad';
import Feature from '../components/common/Feature';
import InstagramGrid from '../components/common/InstagramGrid';
import FeatureAlternate from '../components/common/FeatureAlternate';

import { SectionWrapper } from '../components/common/SectionWrapper';

const IndexPage = () => {
  const {
      data: { edges: data },
    } = useStaticQuery(graphql`
        query frontpage {
            data:  allWordpressAcfForside {
                edges {
                    node {
                        acf {
                          apningstider_jeans
                          apningstider_wear
                          hvor_ligger_nyyork_overskrift
                          hvor_ligger_nyyork_tekst
                          featureartikkel_1 {
                              post_title
                              post_excerpt
                              post_name
                      
                          }
                          featurebilde1_liten {
                              id
                              localFile {
                                  childImageSharp {
                                      fluid(quality: 100, maxWidth:415) {
                                        src
                                      }
                                  }
                              }
                          }
                          featureartikkel_2 {
                              post_title
                              post_excerpt
                              post_name
                      
                          }
                          featurebilde2_liten {
                              id
                              localFile {
                                  childImageSharp {
                                      fluid(quality: 100, maxWidth:415) {
                                        src
                                      }
                                  }
                              }
                          }
                          hvem_er_vi_overskrift
                          hvem_er_vi_tekst
                          hvem_er_vi_bilde {
                              id
                              localFile {
                                  childImageSharp {
                                      fluid(quality: 100, maxWidth:415) {
                                          src
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
    <Layout>
      <SEO title="Home" keywords={['ny york', 'vintage', 'jeans', 'shades']} />
    
       <ImageCarousel id="carousel" /> 
   
      <SectionWrapper id="frontpage01">
        <WhereIs data={data} />        
      </SectionWrapper>
      <SectionWrapper id="frontpage02">
        <OpeningHours  color="pink" store="wear" data={data} />
        <WhoWeAre data={data} />
      </SectionWrapper>
      <SectionWrapper id="frontpage03">
        <Ad type="jeans" />
        <Feature color={nyYorkColors.pink} bgColor={nyYorkColors.yellow} data={data} />  
      </SectionWrapper>
      <SectionWrapper id="frontpage04" >
        <InstagramGrid bgColor={nyYorkColors.pink} />
      </SectionWrapper>
      <SectionWrapper id="frontpage05">
        <FeatureAlternate bgColor={nyYorkColors.gray} color={nyYorkColors.yellow} data={data} />
        <Ad type="wear" />
      </SectionWrapper>

    </Layout>
);
}

export default IndexPage;
