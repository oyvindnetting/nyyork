import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import StoreAdJeansImage from '../../images/store_jeans.jpg';
import { StoreAdJeansWrapper } from './styles/StoreAdJeansWrapper';

const StoreAdJeans = () => {
    const data = useStaticQuery(myQuery);
    const generalinfo = data.generalinfo.edges

    return (   
    <StoreAdJeansWrapper>
        <div className="image">
            <img src={StoreAdJeansImage} alt="Jeans Store" />
        </div>
        <div className="content">
            <h3>VINTAGE JEANS</h3>

            <span>Åpningstider</span>
            <div dangerouslySetInnerHTML={{ __html: generalinfo[0].node.acf.apningstider_jeans }}></div>

            <span>Besøksadresse</span>

            Rathkesgate 7<br />
            Oslo, Norway

        </div>
    </StoreAdJeansWrapper>)
}


export default StoreAdJeans;


export const myQuery = graphql`
query {

  generalinfo: allWordpressAcfGeneralinfo {
    edges {
      node {
        acf {
          apningstider_jeans
        }
      }
    }
  }
}

`;