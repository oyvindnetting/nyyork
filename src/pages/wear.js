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
import WearTop from '../components/wear/WearTop';

import '../components/styles/styles.scss';
import  nyYorkColors from '../components/constants/colors';



const WearPage = () => (
    <Layout>
        <SEO title="Home" keywords={['ny york', 'vintage', 'wear']} />

        <SectionWrapper id="wear01">
            <WearTop />
        </SectionWrapper>

        <SectionWrapper id="wear02">
            <OpeningHours color="pink" />
            <WhoWeAre />
        </SectionWrapper>
            
        <SectionWrapper id="wear03">
            <WhereIs />        
        </SectionWrapper>

        <SectionWrapper id="wear04">
            <Ad type="jeans" />
            <Feature color={nyYorkColors.yellow} bgColor={nyYorkColors.gray} />  
        </SectionWrapper>

        <SectionWrapper id="wear05" >
            <InstagramGrid  bgColor={nyYorkColors.pink}  />
        </SectionWrapper>

        <SectionWrapper id="wear06">
            <ShopShortcuts  />
        </SectionWrapper>
   </Layout>
)

export default WearPage;