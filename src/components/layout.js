import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.css';
import { graphql, useStaticQuery } from 'gatsby';

import { LayoutWrapper } from './styles/LayoutWrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Layout = () => {
  return (
    <>
      <LayoutWrapper>
        <Header />
        <Footer />
      </LayoutWrapper>
    </>
  );
};



export default Layout;
