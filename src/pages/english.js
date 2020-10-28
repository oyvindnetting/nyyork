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
    const data = useStaticQuery(myQuery);
    const english = data.english.edges


    return (
        (
            <Layout>
                <SEO title="English" keywords={['ny york', 'vintage', 'wear']} />
        
                <SectionWrapper id="omoss01">
                    <AboutUsTop data={english} />
                </SectionWrapper>
        
                <SectionWrapper id="omoss02">
                    <WhoWeAre color="pink" topMargin="50px" data={english} />
                </SectionWrapper>
                
                <SectionWrapper id="omoss03">
                    <ContactCardEnglish />
                    <Ad />
                    <Ad type="jeans" />
                </SectionWrapper>
        
                <SectionWrapper id="omoss04">
                    <WhereIs data={english}  />
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


export const myQuery = graphql`
query {
    english:  allWordpressAcfEnglish {
    edges {
        node {
            acf {
              hvor_er_ny_york_overskrift
              hvor_er_ny_york_tekst
              hvem_er_vi_overskrift
              hvem_er_vi_tekst
              hvem_er_vi_bilde {
                  id
                  localFile {
                      childImageSharp {
                          fluid(quality: 100, maxHeight:350) {
                              src
                          }
                      }
                  }
              }
              toppbilde {
                  localFile {
                      childImageSharp {
                          fluid(quality: 100, maxWidth:1200) {
                              src
                          }
                      }
                  }
              }
            }
        }
    }
}
  generalinfo: allWordpressAcfGeneralinfo {
    edges {
      node {
        acf {
          apningstider_jeans
          hvor_er_ny_york_overskrift
          hvor_er_ny_york_tekst
          apningstider_wear
        }
      }
    }
  }
}

`;