import React from 'react';
import PropTypes from 'prop-types';
import { WhoWeAreWrapper } from './styles/WhoWeAreWrapper';

const WhoWeAre = ({color, data}) => {

    return(
        <WhoWeAreWrapper color={color}  className="who_we_are_background">
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

WhoWeAre.propTypes = {
    color: PropTypes.string,
    data: PropTypes.array.isRequired
}
export default WhoWeAre;