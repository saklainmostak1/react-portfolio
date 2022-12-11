import React from 'react';

// import skill data
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='mb-5'>
          <h1 className='grid justify-center text-2xl mb-5'>Here's Some Skills </h1>
          <p className='text-center'>As a Developer, I am an expert with HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React JS, React Tailwind, Daisy UI,
            Node JS, Firebase, Mongo db, Github, Figma</p>

        </div>
        <div
          className='grid grid-cols-8 md:grid-flow-col'
        >
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >

                <img className='lg:h-20' src={skill.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
