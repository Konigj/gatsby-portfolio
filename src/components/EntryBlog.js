import { Link } from 'gatsby';
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const EntryBlog = ({entry}) => {

    const {blog_image, blog_title, id, post_description, Slug, published_at} = entry;
    const image = getImage(blog_image.localFile.childImageSharp.gatsbyImageData);

  return (
    <Link to={Slug} className='border-b-[1px] border-black/10 hover:shadow-2xl p-8 hover:border-none rounded-2xl'>
        <article className='flex flex-row gap-8'>
            <div className='image w-1/4 hidden lg:block'>
                <GatsbyImage className='h-full rounded-lg shadow-lg' layout='fullWidth' image={image} alt={id}/>
            </div>
            <div className='lg:w-3/4  lg:text-justify break-words  '>
                <header className='mb-4'>
                    <h3 className='text-2xl font-bold uppercase lg:tracking-widest mb-2'>{blog_title}</h3>
                    <p className='text-[#818A91]'>
                        <time>{published_at}</time>
                    </p>
                </header>
                <p>{post_description}</p>
            </div>
            
        </article>
    </Link>
  )
}

export default EntryBlog