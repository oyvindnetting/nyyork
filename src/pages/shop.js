import React from 'react';
import SEO from '../components/seo';

import Layout from '../components/layout';
import { SectionWrapper } from '../components/common/SectionWrapper';
import ShopTop from '../components/shop/ShopTop';
import ShopCategory from '../components/shop/ShopCategory';
import ShopProducts from '../components/shop/ShopProducts';

import '../components/styles/styles.scss';
import  nyYorkColors from '../components/constants/colors';




const ShopPage = () => (
    <Layout>
        <SEO title="Home" keywords={['ny york', 'vintage', 'wear']} />
        <SectionWrapper id="shop01">
            <ShopTop />
        </SectionWrapper>
        <SectionWrapper id="shop02">
            <ShopCategory />
        </SectionWrapper>

        <SectionWrapper id="shop03">
            <ShopProducts  />
        </SectionWrapper>


     
   </Layout>
)

export default ShopPage;