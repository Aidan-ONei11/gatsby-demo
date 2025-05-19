import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this following the Gatsby tutorial</p>
      <StaticImage
        alt="The pyramids in Giza at night with the milky way in the background"
        src="../images/homepage-hero-cat.jpg"/>
        
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage