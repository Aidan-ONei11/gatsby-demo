import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this following the Gatsby tutorial</p>
      <StaticImage
        alt="The pyramids in Giza at night with the milky way in the background"
        src="../images/planet-ecom-logo.png"/>
        
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"/>


export default IndexPage