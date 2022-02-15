import React, {useState} from 'react'
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Entry = ({entry}) => {

    const {blog_image, blog_title, id, post_description, Slug} = entry;

    const image = getImage(blog_image.localFile.childImageSharp.gatsbyImageData);

    const [showDescription, setShowDescription] = useState(false);


  return (
    <div className='lg:w-[263px]  h-[300px]'>
        <Link className='relative' to={`blog/${Slug}`}>
            <GatsbyImage className='h-full rounded-xl shadow-lg' layout='fullWidth' image={image} alt={id}/>
            <div aria-hidden="true" onMouseEnter={()=>setShowDescription(true)} onMouseLeave={()=>setShowDescription(false)}
            className='absolute rounded-xl p-4 bg-gradient-to-b from-black/20 to-black/10 hover:from-black/50 hover:to-black/30 transition-all h-[300px] w-full inset-0'>
                <h2 className=' text-white text-2xl font-bold mb-8' >{blog_title}</h2>
                {
                  showDescription && <p className='text-white transition-all ' >{post_description}</p>
                }
                
            </div>
        </Link>
    </div>
  )
}

export default Entry;