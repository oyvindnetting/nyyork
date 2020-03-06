import React from 'react';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import { SectionWrapper } from '../components/common/SectionWrapper';
import OpeningHours from '../components/common/OpeningHours';
import WhoWeAre from '../components/common/WhoWeAre';
import WhereIs from '../components/common/WhereIs';
import Ad from '../components/common/Ad';
import Feature from '../components/common/Feature';
import InstagramGrid from '../components/common/InstagramGrid';
import ShopShortcuts from '../components/common/ShopShortcuts';
import JeansTop from '../components/jeans/JeansTop';

import '../components/styles/styles.scss';
import  nyYorkColors from '../components/constants/colors';



const JeansPage = () => {
    const {
        data: { edges: data },
      } = useStaticQuery(graphql`
          query jeans {
              data:  allWordpressAcfJeans {
                  edges {
                      node {
                          acf {
                            apningstider
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
            <SEO title="Jeans" keywords={['ny york', 'vintage', 'wear']} />
    
            <SectionWrapper id="jeans01">
                <JeansTop />
            </SectionWrapper>
    
            <SectionWrapper id="jeans02">
                <OpeningHours color="gray" data={data} />
                <WhoWeAre data={data} />
            </SectionWrapper>
                
            <SectionWrapper id="jeans03">
                <WhereIs data={data} />        
            </SectionWrapper>
    
            <SectionWrapper id="jeans04">
                <Ad type="wear" />
                <Feature color={nyYorkColors.yellow} bgColor={nyYorkColors.gray} data={data} />  
            </SectionWrapper>
    
            <SectionWrapper id="jeans05" >
                <InstagramGrid bgColor={nyYorkColors.gray} />
            </SectionWrapper>

       </Layout>
    )
}

export default JeansPage;