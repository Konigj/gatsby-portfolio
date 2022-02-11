import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import RightArrowIcon from '../images/arrow-right-Icon.svg'
import TechTag from './TechTag';

const Project = ({project}) => {
    const {title,company_name, project_description,project_image,project_link, id, Tag, project_bg } = project;
    const image = getImage(project_image.localFile.childImageSharp.gatsbyImageData)
  return (
    <div className='flex flex-col lg:flex-row lg:gap-8 lg:mb-16 my-auto'>
        <div className='lg:w-1/2 py-8 relative'>
            <div className='absolute w-3/4 lg:4/5 h-[90%]'>
                <div className={`absolute w-3/4  h-[100%] bg-gradient-to-tr ${project_bg}`}></div>
            </div>
            <div className='image p-5'> 
                <GatsbyImage image={image} className='relative' alt={id}/>
            </div>
        </div>

        <div className='flex flex-col my-auto lg:w-1/2 py-8'>
            <div className='mb-8'>
                <h3 className='font-bold text-2xl lg:text-4xl tracking-widest mb-2' >{title}</h3>
                <h3 className='text-sm tracking-[3px] lg:text-base lg:tracking-[3.5px]' >{company_name}</h3>
                <div className='flex flex-row gap-4 pt-2'>
                {
                    Tag.map(tag => (
                     <TechTag key={tag.id} tag={tag} />
                    ))
                  }
                </div>
            </div>
            <div>
                <p className='mb-4 max-w-[550px] break-words text-justify' >{project_description}</p>
                <div className='flex flex-row place-items-center hover:underline decoration-2 gap-2 hover:gap-6 transition-all duration-300 ease-in-out'>
                    <a className='font-bold' href={project_link}>See project</a>
                    <RightArrowIcon className='w-4 h-4' />
                </div>
            </div>
        
        </div>
    
    </div>
  )
}

export default Project
