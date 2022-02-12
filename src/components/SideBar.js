import React from 'react'
import { Link } from 'gatsby'
import SocialIcons from './SocialIcons'

const SideBar = () => {
  return (
    <div className='bg-white w-screen h-screen flex flex-col items-center lg:hidden'>
      <div className='flex flex-col gap-12 justify-center text-center text-4xl mt-40 mb-10'>
        <Link className='font-bold transition-all duration-300 border-b-4 border-transparent lg:opacity-80 hover:border-black hover:opacity-100' to={'/'}>Home</Link>
        <Link className='font-bold transition-all duration-300 border-b-4 border-transparent lg:opacity-80 hover:border-black hover:opacity-100' to={'/projects'}>Projects</Link>
        <Link className='font-bold transition-all duration-300 border-b-4 border-transparent lg:opacity-80 hover:border-black hover:opacity-100' to={'/blog'}>Blog</Link>
        <Link className='font-bold transition-all duration-300 border-b-4 border-transparent lg:opacity-80 hover:border-black hover:opacity-100' to={'/#contact'}>Contact</Link>
      </div>
      <SocialIcons/>
    </div>
  )
}

export default SideBar