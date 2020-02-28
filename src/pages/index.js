import React from 'react';
import SEO from '../components/seo';

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
import ShopShortcuts from '../components/common/ShopShortcuts';

import { SectionWrapper } from '../components/common/SectionWrapper';

const IndexPage = () => (
    <Layout>
      <SEO title="Home" keywords={['ny york', 'vintage', 'jeans', 'shades']} />
   
       <ImageCarousel id="carousel" /> 
   
      <SectionWrapper id="frontpage01">
        <WhereIs />        
      </SectionWrapper>
      <SectionWrapper id="frontpage02">
        <OpeningHours  color="pink" />
        <WhoWeAre  />
      </SectionWrapper>
      <SectionWrapper id="frontpage03">
        <Ad type="jeans" />
        <Feature color={nyYorkColors.pink} bgColor={nyYorkColors.yellow} />  
      </SectionWrapper>
      <SectionWrapper id="frontpage04" >
        <InstagramGrid bgColor={nyYorkColors.pink} />
      </SectionWrapper>
      <SectionWrapper id="frontpage05">
        <FeatureAlternate bgColor={nyYorkColors.gray} color={nyYorkColors.yellow} />
        <Ad type="wear" />
      </SectionWrapper>
      <SectionWrapper id="frontpage06">
        <ShopShortcuts  />
      </SectionWrapper>
    </Layout>
);

export default IndexPage;
