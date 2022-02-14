import React from 'react';
import useBlogs from '../hooks/useBlogs';
import { Link } from 'gatsby';
import EntryHome from './EntryHome';
import ArrowRightIcon from '../images/arrow-right-Icon.svg'

const BlogSection = () => {

  const Blogs = useBlogs();
  const featuredBlogs = Blogs.slice(0,3)
  return (
    <section className='container py-8 gap-4 flex flex-col w-full px-8'>
      <h2 className=' text-center uppercase font-bold text-4xl pt-4 pb-2'>Latests Posts</h2>
      <div className='grid lg:grid-cols-3 gap-12 py-4 justify-center justify-items-center'>
        {
          featuredBlogs.map(entry => (
            <EntryHome key={entry.node.id} entry={entry.node} />
          ))
        }
      </div>
      <Link to='/blog' className='flex align-middle justify-end gap-2 place-items-center hover:underline decoration-2 decoration-red-500 '>
        <p className='text-right font-bold text-xl text-red-500 ' >See all posts</p>
        <ArrowRightIcon className=' fill-red-500 w-4 h-4'/>
      </Link>

  </section>
  )
};

export default BlogSection;
