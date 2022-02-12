import React from 'react';
import { Link } from 'gatsby';
import BurgerIcon from '../images/burger-menu.svg';
import ClosedIcon from '../images/closed-menu.svg'



const Navigation = ({toggleMenu, isOpen}) => {
  return (
      <nav className={`flex items-center flex-row-reverse lg:flex-row gap-3 lg:gap-12 justify-end`}>
        <ul className={` hidden lg:flex lg:static lg:flex-row lg:gap-12 lg:translate-y-0 lg:p-0 lg:w-auto`}>
            <Link className='font-bold border-b-4 border-transparent lg:opacity-80 hover:border-black hover:opacity-100' activeClassName='border-black opacity-100' to={'/'}>Home</Link>
            <Link className='font-bold border-b-4 border-transparent lg:opacity-80 hover:border-black hover:opacity-100' activeClassName='border-black opacity-100' to={'/projects'}>Projects</Link>
            <Link className='font-bold border-b-4 border-transparent lg:opacity-80 hover:border-black hover:opacity-100' activeClassName='border-black opacity-100' to={'/blog'}>Blog</Link>
            <Link className='font-bold border-b-4 border-transparent lg:opacity-80 hover:border-black hover:opacity-100' activeClassName='border-black opacity-100' to={'/#contact'}>Contact</Link>
        </ul>
        <button id="toggle-menu" className="lg:hidden  " onClick={toggleMenu}  >
          {isOpen ? (
            <ClosedIcon className=''/>
          ): <BurgerIcon className=''/>}
        </button>
      </nav>
  )
};

export default Navigation;
