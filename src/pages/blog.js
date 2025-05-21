import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPage = () => {
    return (
        <Layout pageTitle="My Blog Posts">
            <p>Welcome to Planet E-Com: Tales from Beyond the Fold. Dispatches from the Galaxy of Online Selling.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="My Blog Posts"/>

export default BlogPage;