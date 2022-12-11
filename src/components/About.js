import React from 'react';

// import img
import Image from '../assets/img/about.webp';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <h2 className='text-center text-4xl mb-10'>About Me</h2>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Saklain Mostak
              </h2>
              <p className='mb-4 text-accent'>
                Mern Stack Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Professional and dedicated application developer who is highly experienced in managing effective teams. As a
                passionate developer, I am able to adapt to any kind of pressure and accept challenges. I would like to expand
                my skills by working for a prestigious company.
              </p>
              <p className='mb-8'> I love to use my creativity and make something new. That's why I love to work with React.js. Over the last year, I gather knowledge in various parts of web development. My ultimate goal is to become an awesome full-stack web developer who can make beautiful UIs and also can handle the back-end smoothly.</p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
