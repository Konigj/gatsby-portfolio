import React from 'react';
import Layout from '../components/Layout';
import useBlogs from '../hooks/useBlogs';
import EntryBlog from '../components/EntryBlog'

const Blog = () => {

  const Blogs = useBlogs();
  return (
    <Layout page="Blog">
      <main className='w-3/4 mx-auto'>
        <h2 className=' text-center uppercase font-bold text-4xl pt-4 pb-2'>Writing</h2>
        <div className='my-8 flex justify-center flex-col gap-8'>
        {
          Blogs.map(entry => (
            <EntryBlog key={entry.node.id} entry={entry.node} />
          ))
        }
      </div>
      </main>
    </Layout>
  )
};

export default Blog;
