import React from 'react';
import Experience from './Experience';
import GitHubContribution from './GitHubContribution';
import SkillProgress from './SkillProgress';

const About = () => {
  return (
    <div>
      <Experience></Experience>
      <div className="hero  bg-base-200">
        <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1">
          <div>
            <h1 className="text-5xl font-bold">What <span className='textPrimary'>I</span>  know!</h1>
            <p className='mt-6 mb-4'>Additionally, I am skilled in <span className='textSecondary'>planning, designing, developing, implementing, and debugging</span>  web application development and also <span className='textSecondary'>data analysis</span> .</p>
            <p>Also, I am good at object-oriented programming, Core javaScript, Front-end development frameworks <span className='textSecondary'>React & NoSQL, and Visual Studio.</span>  As of now, I am a professional web developer with various knowledge. </p>

            <p> Currently, I have completed lots of projects which helped me to become a full-stack developer. I have completed the certification <span className='textSecondary'>exam in the programming hero full-stack developer course.</span></p>

            <p>
              I have completed my thesis based on Machine learning. The research paper named is:<span className='textSecondary'>customer behavioral segmentation using machine learning approach.</span>I am joining some hackathon.
            </p>
            <p>
              I have also completed lots of projects using C#, PHP, JAVA etc.
            </p>
          </div>
          <div>
            <SkillProgress></SkillProgress>
          </div>
        </div>
      </div>
      <h1 className='text-center text-5xl my-7'>Github Contribution!</h1>
      <div className='flex justify-center '>
        <GitHubContribution></GitHubContribution>
      </div>

    </div>
  );
};

export default About;