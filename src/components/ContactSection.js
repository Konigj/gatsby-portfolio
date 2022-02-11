import React from 'react';
import ContactForm from './ContactForm';
import MailIcon from '../images/mailIcon.svg'

const ContactSection = () => {
  return (
      <section id='contact' className=' bg-[#E6F1F8] flex flex-col px-4 lg:px-16 py-10 justify-center items-center w-full'>
        <h2 className='text-center uppercase font-bold text-4xl pt-4 pb-2 mb-8'>Contact</h2>
        <div className=' w-full lg:w-3/5 p-8 flex flex-col lg:flex-row bg-white shadow-2xl mb-8'>
          <div className='lg:w-1/2 lg:border-r-2 border-black/30 lg:pr-8 mb-8 lg:mb-0'>
            <div className='flex flex-row gap-2 items-center mb-4 justify-center'>
              <MailIcon className='hidden'/>
              <h3 className='text-4xl font-bold text-center'>Let's work together.</h3>
            </div>
            <p className='text-justify break-words'>From interaction design to scalable design systems, single-page apps and ambitious web projects.
            <span className='font-bold'> - the wilder, the better</span></p>
          </div>
          <ContactForm/>
        </div>
      </section>
  )
};

export default ContactSection;
