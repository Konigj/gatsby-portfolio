import React from 'react';
import BurgerIcon from '../images/burger-menu.svg';
import ClosedIcon from '../images/closed-menu.svg'

const NavMenu = () => {
  return (
      <button id="toggle-menu" className="lg:hidden">
        <BurgerIcon className=''/>
        <ClosedIcon className='hidden'/>
      </button>
  )
  }
export default NavMenu;
