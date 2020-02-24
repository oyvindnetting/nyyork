import React from 'react';

const Slide = ({ slide }) => (
    <div>
        <img src="{slide.featured_media.localFile.childImageSharp.fluid} "/>
        <p className="legend">Legend 1</p>
    </div>
);

export default Slide;
