import React, {useState, useEffect} from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Navigation from './Navigation';
import SideBar from './SideBar'
const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setTimeout(() => {
            setIsOpen(!isOpen)
        }, 150);
    }

    useEffect(()=> {
        const hideMenu = () => {
            if(window.innerWidth > 1024 && isOpen)
            setIsOpen(false)
        }
        window.addEventListener('resize', hideMenu);
        return() => {
            window.removeEventListener('resize', hideMenu)
        }
    })

    const {logo} = useStaticQuery(graphql `
        query {
            logo: file(relativePath: {eq: "JR-logo-black-35h74w.svg"}) {
                publicURL
            }
        }
    `)

  return (
      <header className={`container lg:my-8 min-h-16 lg:h-20 p-8 flex flex-col content-center items-center  transition-all duration-1000`}>
        <div className='container flex px-2 items-center justify-between relative'>
            <Link to='/'>
                <img src={logo.publicURL} className='hover:scale-105 transition-all duration-500' alt='logo'/>
            </Link>
            <Navigation toggleMenu={toggleMenu} isOpen={isOpen}/>
        </div>
        {
            isOpen && <SideBar/>
        }
      </header>
  )
};

export default Header;
