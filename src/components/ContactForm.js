import React from 'react'

const ContactForm = () => {
  return (
    <form className='lg:w-1/2 lg:pl-8 flex flex-col' action="https://formspree.io/f/xqknprwp" method="post">
        <div className='flex flex-col'>
            <input type='text' name="name" required placeholder='Name' className='mb-4 p-2 focus:bg-white placeholder:text-slate-700/80 text-black rounded-md bg-[#E6F1F8]' />
            <input type='email' name="email" required placeholder='Email' className='mb-4 p-2 focus:bg-white placeholder:text-slate-700/80 text-black rounded-md bg-[#E6F1F8]' />
            <textarea name='message' row='5' required placeholder='Message' className='mb-4 p-2 focus:bg-white placeholder:text-slate-700/80 text-black rounded-md bg-[#E6F1F8]'/>
        </div> 
        <button className='rounded-full mx-auto hover:bg-purple-800  bg-purple-900 text-white font-bold px-6 py-2 transition-colors' type='submit'>Submit</button>    
    </form>
  )
}

export default ContactForm