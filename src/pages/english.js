import React from 'react';
import SEO from '../components/seo';

import Layout from '../components/layout';
import { SectionWrapper } from '../components/common/SectionWrapper';
import AboutUsTop from '../components/english/AboutUsTop';
import WhoWeAreEnglish from '../components/common/WhoWeAreEnglish';
import Ad from '../components/common/Ad';
import ContactCardEnglish from '../components/english/ContactCardEnglish';
import WhereIsEnglish from '../components/common/WhereIsEnglish';
import StoreAdWearEnglish from '../components/english/StoreAdWearEnglish';
import StoreAdJeansEnglish from '../components/english/StoreAdJeansEnglish';

import '../components/styles/styles.scss';
import  nyYorkColors from '../components/constants/colors';


const EnglishPage = () => (
    <Layout>
        <SEO title="Home" keywords={['ny york', 'vintage', 'wear']} />

        <SectionWrapper id="omoss01">
            <AboutUsTop />
        </SectionWrapper>

        <SectionWrapper id="omoss02">
            <WhoWeAreEnglish color="pink" />
        </SectionWrapper>
        
        <SectionWrapper id="omoss03">
            <ContactCardEnglish />
            <Ad />
            <Ad type="jeans" />
        </SectionWrapper>


        <SectionWrapper id="omoss04">
            <WhereIsEnglish  />
        </SectionWrapper>


        <SectionWrapper id="omoss06">
 
            <h2>OUR STORES</h2>
            <StoreAdWearEnglish  />
            <StoreAdJeansEnglish  />
        </SectionWrapper>
   </Layout>
)

export default EnglishPage;