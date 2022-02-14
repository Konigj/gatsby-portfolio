import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from './Layout';
import TwitterIcon from '../images/social/twitterIcon.svg'
import ArrowRightIcon from '../images/arrow-right-Icon.svg'


export const query = graphql `
    query ($id: String!) {
  allStrapiBlogs(filter: {id: {eq: $id}}) {
    edges {
      node {
        id
        blog_title
        blog_content
        published_at(formatString: "DD MMMM, YYYY")
        post_description
        blog_image {
          localFile {
              childImageSharp {
                  gatsbyImageData(width: 600, formats: AUTO)
              }
          }
        }
      }
    }
  }
}

`

const EntryPage = ({data}) => {

  const {blog_title, blog_content, published_at, post_description} = data.allStrapiBlogs.edges[0].node;

  return (
    <Layout page={blog_title}>
      <main className='container px-8 w-3/4 '>
        <article>
          <header className='container lg:text-center py-8 lg:py-20'>
            <h1 className='font-bold text-4xl lg:text-6xl' >{blog_title}</h1>
            <div>
              <p className='lg:text-center lg:text-xl my-4 text-[#818A91]'>
                <time>{published_at}</time>
                <span className=''>-</span>
                <span className=''>Category Tags</span>
              </p>
            </div>
          </header>

          <div className='post__content mx-auto text-justify'>
            <p className='mb-8 text-2xl lg:text-3xl tracking-wide'>{post_description}</p>
            <div className='whitespace-pre-line text-lg lg:text-xl'>{blog_content}</div>
          </div>

          <div className='post__footer py-8 text-right mx-auto'>
            <a href='https://twitter.com/intent/follow?screen_name=JuanReyAl' target="_blank"  rel="noreferrer"
            className='px-4 py-2 rounded-lg bg-[#1DA1F2] text-white hover:bg-white hover:text-[#1DA1F2] fill-[#fff] hover:fill-[#1DA1F2] hover:outline-[#1DA1F2] outline  hover:outline-2 text-lg font-bold transition-colors duration-300'>
            <TwitterIcon className='w-4 inline  mr-2'/>
            Follow @JuanReyAl
            </a>

            <Link to='/blog' className='flex align-middle mb-4 mt-8 justify-end gap-2 place-items-center hover:underline decoration-2 decoration-red-500 '>
              <p className='text-right font-bold text-xl text-red-500 ' >See all posts</p>
              <ArrowRightIcon className=' fill-red-500 w-4 h-4'/>
            </Link>
          </div>

        </article>
      </main>
    </Layout>
  )
}

export default EntryPage