import { Link } from 'gatsby';
import React from 'react';

const Footer = ({page}) => {

  return (
      <div className={`px-8 py-8  border-black/20 ${page==='Home'? "" : 'border-t-[1px]'}`}>
        <div className='container flex flex-wrap align-middle gap-12 text-sm'>
          <p><span className='font-bold'>&copy; 2022</span><br/><Link className='underline hover:no-underline' to='/'>Juan Rey</Link></p>
          <p><span className='font-bold'>Links</span><br/><a className='underline hover:no-underline' href='https://twitter.com/JuanReyAl'>Twitter</a> / <a className='underline hover:no-underline' href='https://github.com/konigj'>GitHub</a> / 
          <a className='underline hover:no-underline' href='https://www.linkedin.com/in/juanreyal/'> Linkedin</a> / <a className='underline hover:no-underline' href='https://noova.site/juan'> Noova</a></p>
          <p><span className='font-bold'>Legal</span><br/><a className='underline hover:no-underline' href='/'>Privacy Policy</a></p>
        </div>
      </div>
  )
};

export default Footer;
