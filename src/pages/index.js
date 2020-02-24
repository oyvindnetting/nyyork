import React from 'react';
import SEO from '../components/seo';

import '../components/styles/styles.scss';

import Layout from '../components/layout';

import Carousel from '../components/frontpage/Carousel';

const IndexPage = () => (

    <Layout>
      <SEO title="Home" keywords={['ny york', 'vintage', 'jeans', 'shades']} />
      <Carousel />
    </Layout>


);

export default IndexPage;
