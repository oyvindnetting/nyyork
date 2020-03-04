import React from 'react';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import { SectionWrapper } from '../components/common/SectionWrapper';
import AboutUsTop from '../components/english/AboutUsTop';
import WhoWeAre from '../components/common/WhoWeAre';
import Ad from '../components/common/Ad';
import ContactCardEnglish from '../components/english/ContactCardEnglish';
import WhereIs from '../components/common/WhereIs';
import StoreAdWearEnglish from '../components/english/StoreAdWearEnglish';
import StoreAdJeansEnglish from '../components/english/StoreAdJeansEnglish';

import '../components/styles/styles.scss';


const EnglishPage = () => {
    const {
        data: { edges: data },
      } = useStaticQuery(graphql`
          query english {
              data:  allWordpressAcfEnglish {
                  edges {
                      node {
                          acf {
                            
                            hvor_ligger_nyyork_overskrift
                            hvor_ligger_nyyork_tekst
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
        (
            <Layout>
                <SEO title="English" keywords={['ny york', 'vintage', 'wear']} />
        
                <SectionWrapper id="omoss01">
                    <AboutUsTop />
                </SectionWrapper>
        
                <SectionWrapper id="omoss02">
                    <WhoWeAre color="pink" data={data} />
                </SectionWrapper>
                
                <SectionWrapper id="omoss03">
                    <ContactCardEnglish />
                    <Ad />
                    <Ad type="jeans" />
                </SectionWrapper>
        
                <SectionWrapper id="omoss04">
                    <WhereIs data={data}  />
                </SectionWrapper>
        
                <SectionWrapper id="omoss06">
         
                    <h2>OUR STORES</h2>
                    <StoreAdWearEnglish  />
                    <StoreAdJeansEnglish  />
                </SectionWrapper>
           </Layout>
        )
        
    )
}
export default EnglishPage;