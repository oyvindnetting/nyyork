import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import StoreAdWearImage from '../../images/store_wear.jpg';
import { StoreAdWearWrapper } from './styles/StoreAdWearWrapper';

const StoreAdWearEnglish = () => {
    const data = useStaticQuery(myQuery);
    const generalinfo = data.generalinfo.edges

    return(
        <StoreAdWearWrapper>
        <div className="content">
            <h3>VINTAGE WEAR</h3>

            <span>Opening hours</span>

            <div dangerouslySetInnerHTML={{ __html: generalinfo[0].node.acf.apningstider_wear }}></div>

            <span>Visiting address</span> 

            Thorvald Meyers gate 50<br />
            Oslo, Norway


        </div>
        <div className="image">
            <img src={StoreAdWearImage} alt="Wear Store" />
        </div>
    </StoreAdWearWrapper>
    )
}


export default StoreAdWearEnglish;

export const myQuery = graphql`
query {

  generalinfo: allWordpressAcfGeneralinfo {
    edges {
      node {
        acf {

          apningstider_wear
        }
      }
    }
  }
}

`;