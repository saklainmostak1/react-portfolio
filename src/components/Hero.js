import React from 'react';

// import woman image
import Img from '../assets/img/me.png';
import resume from './Saklain Mostak resume.pdf'

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm Saklain Mostak! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
             I am A  Mern Stack<br />  Web Developer.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
               I am able to adapt to any kind of pressure and accept challenges. I would like to expand
              my skills by working for a prestigious company.
            </p>
            {/* <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
             {resume}
            </button> */}
             <a href={resume} download>
          <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>Download Resume</button>
        </a>
          </div>
          <div className='hidden mb-96 lg:flex flex-1 justify-end items-end h-full'>
            <img src={Img} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
