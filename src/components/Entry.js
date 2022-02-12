import { Link } from 'gatsby';
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Entry = ({entry}) => {

    const {blog_image, blog_title, id, post_description, Slug} = entry;

    const image = getImage(blog_image.localFile.childImageSharp.gatsbyImageData);

  return (
    <div  className='lg:w-[263px] h-[300px]'>
        <Link className='relative' to={Slug}>
            <GatsbyImage className='h-full rounded-lg shadow-lg' layout='fullWidth' image={image} alt={id}/>
            <div className='absolute top-0 p-4'>
                <h2 className=' text-white text-2xl font-bold mb-8' >{blog_title}</h2>
                <p className='text-white' >{post_description}</p>
            </div>
        </Link>
    </div>
  )
}

export default Entry;