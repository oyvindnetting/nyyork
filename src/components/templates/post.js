/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import  nyYorkColors from '../constants/colors';
import Layout from '../layout';

import { PostWrapper } from './styles/PostWrapper';

import FacebookIcon from '../../images/facebook_icon_yellow.svg';
import MailIcon from '../../images/mail_icon_yellow.svg';


const postTemplate = ({ data: { post }}) => {

    return(
        <Layout>
            <div className="container">
                <div className="row" style={{ marginBottom: '40px' }}>
                    <PostWrapper className="col-lg-12" theme={nyYorkColors}>
                    <div class="left">
                            <div class="image">
                                <img src={post.featured_media.localFile.childImageSharp.fluid.srcWebp} alt={post.featured_media.alt_text} />
        
                            </div>
                            <div class="some">
                                <h3>DEL DENNE SAKEN</h3>
                                <div class="logos">
                                    <img src={FacebookIcon} alt="Facebook icon" />
                                    <img src={MailIcon} alt="Mail icon" />
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="heading">
                                <div class="title" dangerouslySetInnerHTML={{ __html: post.title }} ></div>
                            </div>
                            <div class="body" dangerouslySetInnerHTML={{ __html: post.content }}>
                            </div>
                        </div>
            
                    </PostWrapper>
                </div>
            </div>
      </Layout>
    );
}
 

postTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

export default postTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        id
        alt_text
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
`;
