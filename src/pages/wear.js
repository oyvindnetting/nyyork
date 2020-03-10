import React from 'react';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import { SectionWrapper } from '../components/common/SectionWrapper';
import OpeningHours from '../components/common/OpeningHours';
import WhoWeAre from '../components/common/WhoWeAre';
import WhereIs from '../components/common/WhereIs';
import Ad from '../components/common/Ad';
import FeatureAlternate from '../components/common/FeatureAlternate';
import InstagramGrid from '../components/common/InstagramGrid';

import WearTop from '../components/wear/WearTop';

import '../components/styles/styles.scss';
import  nyYorkColors from '../components/constants/colors';



const WearPage = () => {
    const {
        data: { edges: data },
      } = useStaticQuery(graphql`
          query wear {
              data:  allWordpressAcfWear {
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
            <SEO title="Wear" keywords={['ny york', 'vintage', 'wear']} />

            <SectionWrapper id="wear01">
                <WearTop data={data} />
            </SectionWrapper>

            <SectionWrapper id="wear02">
                <OpeningHours color="pink" store="wear" data={data} />
                <WhoWeAre data={data} />
            </SectionWrapper>
                
            <SectionWrapper id="wear03">
                <WhereIs data={data} />        
            </SectionWrapper>

            <SectionWrapper id="wear04">
                <Ad type="jeans" />
                <FeatureAlternate color={nyYorkColors.yellow} bgColor={nyYorkColors.pink} data={data} />  
            </SectionWrapper>

            <SectionWrapper id="wear05" >
                <InstagramGrid  bgColor={nyYorkColors.pink} nextInsta="next_four" />
            </SectionWrapper>

    </Layout>   
    );
}


export default WearPage;