import React from 'react';
import useHeroSection from '../hooks/useHeroSection'
import SocialIcons from './SocialIcons';
// import ButtonCTA from './ButtonCTA';

const HeroSection = () => {
    const heroData = useHeroSection();
    const {greeting, short_description, hero_image} = heroData;

  return (
      <section className='container flex flex-col-reverse lg:flex-row py-10 px-4 lg:h-[600px] items-center gap-4'>
        <div className='container-text text-center lg:text-left lg:max-w-[50%] mt-4 lg:mt-0'>
            <h4 className='text-xl mb-4 font-bold tracking-wide  text-red-600'>{greeting.toUpperCase()}</h4>
            <h1 className='text-4xl font-bold mb-4 lg:text-6xl'>{short_description}</h1>
            <SocialIcons className='mx-auto'/>
            {
                //<ButtonCTA cv={heroData.cv.localFile.publicURL}/>
            }
        </div>
        <div className='container-image items-center mx-auto'>
            <img className='max-h-[250px] lg:max-h-max' src={hero_image.localFile.childImageSharp.fluid.srcWebp} alt="profile_pic"/>
        </div>
      </section>
  )
};

export default HeroSection;
