import React from 'react';
import BlogSection from '../components/BlogSection';
import Layout from '../components/Layout';

const blog = () => {
  return (
    <Layout page="Blog">
      <main>
        <BlogSection/>
      </main>
    </Layout>
  )
};

export default blog;
