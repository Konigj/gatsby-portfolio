import React from 'react';
import useAboutSection from '../hooks/useAboutSection';
import TechStack from './TechStack';

const AboutSection = () => {

    const aboutDescription = useAboutSection();
  return (
      <section className=' w-full p-8 flex flex-col items-center gap-4 bg-[#E6F1F8]'>
        <div className='py-8 text-center'>
            <div className='text-center'>
                <h2 className='uppercase font-bold text-4xl pt-4 pb-2'>
                About me</h2>
                <h4 className='text-md opacity-70 uppercase'>GET TO KNOW ME BEFORE YOU DIVE INTO MY CONTENT.</h4>
            </div>
            <div className='mt-8 container lg:w-1/2 px-8'>
                <p className='lg:text-lg break-before-avoid-page whitespace-pre-line text-justify'>{aboutDescription}</p>
                <div className="flex flex-col py-2 justify-items-center">
                    <p className=' my-auto lg:text-lg hover:font-bold break-before-avoid-page whitespace-pre-line text-center pt-4'>I'm happy to welcome you on my website!</p> 
                    {//<span className='self-end text-2xl hover:rotate-[5deg] px-2 py-2 mx-auto' >😁</span>
                    }
                </div>
            </div>
        </div>
        <div className="py-4 flex flex-col lg:w-3/5">
            <h4 className='text-md font-bold uppercase text-center'>What I do</h4>
            <TechStack/>
            <div className='pt-10 flex flex-col lg:text-lg text-justify px-4'>
                <div className='flex flex-row py-2 break-words'>
                    <span className='px-2'>⚡</span> <p>I help people to build ambitious yet accesible web projects.</p>
                </div>
                <div className='flex flex-row py-2 break-words'>
                    <span className='px-2'>⚡</span> <p>I develop highly interactive interfaces for web applications.</p>
                </div>
                <div className='flex flex-row py-2 break-words'>
                    <span className='px-2'>⚡</span> <p>Beyond front-end development, I'm happy to help you plan and build a <a href='https://jamstack.org/' className='font-bold text-black underline hover:text-red-400 decoration-red-400'>JAMstack</a> project.</p>
                </div>
                <div className='flex flex-row py-2 break-words'>
                    <span className='px-2'>⚡</span> <p>My mission is to deliver pixel-perfect websites or applications that run blazing fast.</p>
                </div>
            </div>
        </div>
      </section>
  )
};

export default AboutSection;
