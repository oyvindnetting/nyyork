import React from 'react';
import SEO from '../components/seo';

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



const JeansPage = () => (
    <Layout>
        <SEO title="Home" keywords={['ny york', 'vintage', 'wear']} />

        <SectionWrapper id="jeans01">
            <JeansTop />
        </SectionWrapper>

        <SectionWrapper id="jeans02">
            <OpeningHours color="gray" />
            <WhoWeAre />
        </SectionWrapper>
            
        <SectionWrapper id="jeans03">
            <WhereIs />        
        </SectionWrapper>

        <SectionWrapper id="jeans04">
            <Ad type="wear" />
            <Feature color={nyYorkColors.yellow} bgColor={nyYorkColors.gray} />  
        </SectionWrapper>

        <SectionWrapper id="jeans05" >
            <InstagramGrid bgColor={nyYorkColors.gray} />
        </SectionWrapper>

        <SectionWrapper id="jeans06">
            <ShopShortcuts  />
        </SectionWrapper>
   </Layout>
)

export default JeansPage;