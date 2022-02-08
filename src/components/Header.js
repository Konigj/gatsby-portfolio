import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Navigation from './Navigation';

const Header = () => {

    const {logo} = useStaticQuery(graphql `
        query {
            logo: file(relativePath: {eq: "JR-logo-black-35h74w.svg"}) {
                publicURL
            }
        }
    `)


  return (
      <header className='md:my-8 h-16 md:h-20 p-2 flex content-center items-center'>
        <div className='container flex px-2 items-center justify-between'>
            <Link to='/'>
                <img src={logo.publicURL} alt='logo'/>
            </Link>
            <Navigation/>
        </div>
      </header>
  )
};

export default Header;
