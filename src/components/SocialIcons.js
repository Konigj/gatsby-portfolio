import React from 'react';

import TwitterIcon from '../images/social/twitterIcon.svg'
import GitHubIcon from '../images/social/githubIcon.svg'
import LinkedinIcon from '../images/social/linkedinIcon.svg'
import NoovaIcon from '../images/social/noovaIcon.svg'

const SocialIcons = () => {
  return (
      <div className='flex flex-row gap-4 w-full justify-center lg:justify-start mt-8'>
        <a className='hover:rotate-[15deg] fill-[#1DA1F2]' href='https://twitter.com/JuanReyAl'>
            <TwitterIcon className='w-8'/>
        </a> 
        <a className='hover:rotate-[15deg] fill-[#333333]' href='https://github.com/konigj'>
            <GitHubIcon className='w-8'/>
        </a>
        <a className='hover:rotate-[15deg] fill-[#0072b1]' href='https://www.linkedin.com/in/juanreyal/'>
            <LinkedinIcon className='w-8'/>
        </a>
        <a className='hover:rotate-[15deg]' href='https://noova.site/juan'>
            <NoovaIcon className='w-[32px] h-[32px]'/>
        </a>
      </div>
  )
};

export default SocialIcons;
