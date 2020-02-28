import React from 'react';
import SEO from '../components/seo';

import Layout from '../components/layout';
import { SectionWrapper } from '../components/common/SectionWrapper';
import OmOssTop from '../components/omoss/OmOssTop';
import WhoWeAre from '../components/common/WhoWeAre';
import Ad from '../components/common/Ad';
import ContactCard from '../components/omoss/ContactCard';
import WhereIs from '../components/common/WhereIs';
import StoreAdWear from '../components/omoss/StoreAdWear';
import StoreAdJeans from '../components/omoss/StoreAdJeans';
import ContactForm from '../components/omoss/ContactForm';

import '../components/styles/styles.scss';
import  nyYorkColors from '../components/constants/colors';




const OmOssPage = () => (
    <Layout>
        <SEO title="Home" keywords={['ny york', 'vintage', 'wear']} />

        <SectionWrapper id="omoss01">
            <OmOssTop />
        </SectionWrapper>

        <SectionWrapper id="omoss02">
            <WhoWeAre color="pink" />
        </SectionWrapper>

        <SectionWrapper id="omoss03">
            <ContactCard />
            <Ad />
            <Ad type="jeans" />
        </SectionWrapper>
        
        <SectionWrapper id="omoss04">
            <WhereIs />
        </SectionWrapper>

        <SectionWrapper id="omoss05">

           <h2>KONTAKT OSS</h2>
            <ContactForm />
        </SectionWrapper>

        <SectionWrapper id="omoss06">
 
            <h2>VÅRE BUTIKKER</h2>
            <StoreAdWear  />
            <StoreAdJeans theme={nyYorkColors} />
        </SectionWrapper>

   </Layout>
)

export default OmOssPage;