import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';


const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
            <p>Welcome to Planet E-Com: Tales from Beyond the Fold. Dispatches from the Galaxy of Online Selling.</p>
        </Layout>
    )
}

export const query = graphql`
query {
    allFile {
      nodes {
        name
      }
    }
  }
  `

export const Head = () => <Seo title="My Blog Posts"/>

export default BlogPage;