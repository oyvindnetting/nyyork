import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.css';

import { LayoutWrapper } from './styles/LayoutWrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';

import nyYorkColors from './constants/colors';


const Layout = ({children}) => {
  return (
    <>
      <LayoutWrapper theme={nyYorkColors}>
        <Header theme={nyYorkColors}  />
          <main id="main" className="site-main" role="main" >
            {children}
          </main>
        <Footer />
      </LayoutWrapper>
    </>
  );
};




export default Layout;
