import React from 'react';
import JsIcon from '../images/techStack/JsIcon.svg'
import ReactIcon from '../images/techStack/reactIcon.svg'
import GitIcon from '../images/techStack/gitIcon.svg'
import GraphqlIcon from '../images/techStack/graphqlIcon.svg'
import NodeIcon from '../images/techStack/nodeIcon.svg'
import StrapiIcon from '../images/techStack/strapiIcon.svg'


const TechStack = () => {
  return (
      <div className='container w-full flex flex-wrap gap-8 justify-center mt-8 px-8'>
            <JsIcon className=' w-[45px] h-[45px] lg:opacity-70 hover:opacity-100'/>
            <ReactIcon className='fill-[#61DBFB] w-[45px] h-[45px] lg:opacity-70  hover:opacity-100'/>
            <GitIcon className='fill-[#f34f29] w-[45px] h-[45px] lg:opacity-70 hover:opacity-100'/>
            <GraphqlIcon className='w-[45px] h-[45px] lg:opacity-70 hover:opacity-100'/>
            <NodeIcon className='w-[45px] h-[45px] lg:opacity-70 hover:opacity-100'/>
            <StrapiIcon className='w-[45px] h-[45px] lg:opacity-70 hover:opacity-100'/>
      </div>
  )
};

export default TechStack;
