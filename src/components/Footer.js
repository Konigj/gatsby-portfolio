import { Link } from 'gatsby';
import React from 'react';

const Footer = () => {
  return (
      <div className='px-8 py-8 border-t-[1px] border-black/20'>
        <div className='container flex flex-wrap align-middle gap-12 text-sm'>
          <p><span className='font-bold'>&copy; 2022</span><br/><Link className='underline hover:no-underline' to='/'>Juan Rey</Link></p>
          <p><span className='font-bold'>Social</span><br/><a className='underline hover:no-underline' href='/'>Twitter</a> / <a className='underline hover:no-underline' href='/'>GitHub</a> / 
          <a className='underline hover:no-underline' href='/'> Linkedin</a></p>
          <p><span className='font-bold'>Legal</span><br/><a className='underline hover:no-underline' href='/'>Privacy Policy</a></p>
        </div>
      
      </div>
  )
};

export default Footer;
