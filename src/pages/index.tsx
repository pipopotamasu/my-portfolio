import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/organisms/Seo';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <div>main contents</div>
  </Layout>
);

export default IndexPage;
