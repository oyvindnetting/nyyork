import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { WhoWeAreWrapper } from './styles/WhoWeAreWrapper';

// <WhoWeAreWrapper color="pink"> for pink background
const WhoWeAre = () => {
    const {
        data: { edges: data },
    } = useStaticQuery(graphql`
        query whoweare {
            data:  allWordpressAcfForside {
                edges {
                    node {
                        acf {
                            hvem_er_vi_overskrift
                            hvem_er_vi_tekst
                            hvem_er_vi_bilde {
                                id
                                localFile {
                                    childImageSharp {
                                        fluid(quality: 100, maxWidth: 2000) {
                                            srcWebp
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    return(
        <WhoWeAreWrapper>
            <div className="content">
                <h2>{data[0].node.acf.hvem_er_vi_overskrift}</h2>
                <div>
                {data[0].node.acf.hvem_er_vi_tekst}
                </div>
            </div>
            <div className="image">
                <img src={data[0].node.acf.hvem_er_vi_bilde.localFile.childImageSharp.fluid.srcWebp} alt="Feature" />
            </div>
        </WhoWeAreWrapper>
    );


}
export default WhoWeAre;