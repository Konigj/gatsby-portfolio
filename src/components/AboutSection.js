import React from 'react';
import useAboutSection from '../hooks/useAboutSection';
import TechStack from './TechStack';

const AboutSection = () => {

    const aboutDescription = useAboutSection();
  return (
      <section className='container py-8 flex flex-col items-center gap-4'>
        <div className='py-8 text-center'>
            <div className='text-center'>
                <h2 className='uppercase font-bold text-4xl pt-4 pb-2'>
                About me</h2>
                <h4 className='text-md opacity-70 uppercase'>GET TO KNOW ME BEFORE YOU DIVE INTO MY CONTENT.</h4>
            </div>
            <div className='mt-8 container w-1/2 text-justify'>
                <p>{aboutDescription}</p>
            </div>
        </div>

        <div>
        <h4 className='text-md font-bold uppercase text-center'>What I use</h4>
            <TechStack/>
        </div>

        
     
      </section>
  )
};

export default AboutSection;
