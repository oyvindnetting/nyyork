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


import JeansTop from '../components/jeans/JeansTop';

import '../components/styles/styles.scss';
import  nyYorkColors from '../components/constants/colors';



const JeansPage = () => {
    const data = useStaticQuery(myQuery);
    const jeans = data.jeans.edges
    const generalinfo = data.generalinfo.edges
  

    return (
        <Layout>
            <SEO title="Jeans" keywords={['ny york', 'vintage', 'wear']} />
    
            <SectionWrapper id="jeans01">
                <JeansTop data={jeans} />
            </SectionWrapper>
    
            <SectionWrapper id="jeans02">
                <OpeningHours color="gray" data={generalinfo} />
                <WhoWeAre data={jeans} />
            </SectionWrapper>
                
            <SectionWrapper id="jeans03">
                <WhereIs data={generalinfo} />        
            </SectionWrapper>
    
            <SectionWrapper id="jeans04">
                <Ad type="wear" />
                <Feature color={nyYorkColors.yellow} bgColor={nyYorkColors.gray} data={jeans} />  
            </SectionWrapper>

       </Layout>
    )
}

export default JeansPage;


export const myQuery = graphql`
query {
  jeans: allWordpressAcfJeans {
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