import React from 'react';
import JsIcon from '../images/techStack/JsIcon.svg'
import ReactIcon from '../images/techStack/reactIcon.svg'
import GitIcon from '../images/techStack/gitIcon.svg'
import GraphqlIcon from '../images/techStack/graphqlIcon.svg'
import NodeIcon from '../images/techStack/nodeIcon.svg'
import StrapiIcon from '../images/techStack/strapiIcon.svg'


const TechStack = () => {
  return (
      <div className='flex sm:flex-row gap-8 w-full justify-center lg:justify-start mt-8'>
            <JsIcon className='w-[45px] h-[45px] opacity-80 hover:opacity-100'/>
            <ReactIcon className='w-[45px] h-[45px] opacity-80  hover:opacity-100'/>
            <GitIcon className='w-[45px] h-[45px] opacity-80 hover:opacity-100'/>
            <GraphqlIcon className='w-[45px] h-[45px] opacity-80 hover:opacity-100'/>
            <NodeIcon className='w-[45px] h-[45px] opacity-80 hover:opacity-100'/>
            <StrapiIcon className='w-[45px] h-[45px] opacity-80 hover:opacity-100'/>
      </div>
  )
};

export default TechStack;
