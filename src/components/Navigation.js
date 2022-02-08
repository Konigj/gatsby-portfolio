import React from 'react';
import { Link } from 'gatsby';
import NavMenu from './NavMenu';


const Navigation = () => {
  return (
      <nav className='flex items-center flex-row-reverse lg:flex-row gap-3 lg:gap-12 justify-end'>
        <ul className='fixed top-0 left-0 z-20 flex flex-col items-center gap-4 translate-y-[-500%] pt-28 pb-8 w-full
        lg:static lg:flex-row lg:gap-12 lg:translate-y-0 lg:p-0 lg:w-auto'>
            <Link className='font-bold border-b-4 border-transparent lg:opacity-80 hover:border-black hover:opacity-100' activeClassName='border-black opacity-100' to={'/'}>Home</Link>
            <Link className='font-bold border-b-4 border-transparent lg:opacity-80 hover:border-black hover:opacity-100' activeClassName='border-black opacity-100' to={'/about'}>About</Link>
            <Link className='font-bold border-b-4 border-transparent lg:opacity-80 hover:border-black hover:opacity-100' activeClassName='border-black opacity-100' to={'/projects'}>Projects</Link>
            <Link className='font-bold border-b-4 border-transparent lg:opacity-80 hover:border-black hover:opacity-100' activeClassName='border-black opacity-100' to={'/blog'}>Blog</Link>
        </ul>
        <NavMenu className='justify-self-end'/>
      </nav>
  )
};

export default Navigation;
