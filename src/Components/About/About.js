import React from 'react';
import about from '../../Assets/about.png';
import { ImPointRight } from "react-icons/im";
import Skills from './Skills';
import Tools from './Tools';
import GitHubContribution from './GitHubContribution';
import SkillProgress from './SkillProgress';
const About = () => {
  return (
    <div>

      <div className='hero '>
        <div className="hero-content grid lg:grid-cols-3 sm:grid-cols-1 " >
          <div className='lg:col-span-2'>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <blockquote className="blockquote mb-0 text-xl">
              <p style={{ textAlign: "justify" }}>
                Hi Everyone, I am <span className="textPrimary">MD EMRAN </span>
                from <span className="textPrimary"> Dhaka,Bangladesh.</span>
                <br />
                I have completed my undergraduate degree in Department of Software Engineering Major in Data Science from Daffodil International University.
                <br /> I developed a keen interest in IT, especially web development and data science in the school itself, and eventually pursued my education that directed my career opportunities to the IT industry.
                <br /> I have learned HTML,CSS,
                JavaScript, React, Firebase, MongoDB.
                Apart from coding, some other activities that I love to do!
              </p>
              <ul className='my-4'>
                <li className="flex text-2xl">
                  <ImPointRight /> <span className='ml-2'>Playing Cricket</span>
                </li>
                <li className="flex text-2xl">
                  <ImPointRight /> <span className='ml-2'>Traveling new place</span>
                </li>
                <li className="flex text-2xl">
                  <ImPointRight /> <span className='ml-2'>Bike riding with friend</span>
                </li>
                <li className="flex text-2xl">
                  <ImPointRight /> <span className='ml-2'>Explore new technology</span>
                </li>


              </ul>

              <p className='textPrimary'>
                It is time of data.You can do anything using your previous data. <br /> 'If you properly use your data, you can grow your business faster than your competitors":
                {" "}
                </p>
                <footer className="text-center">-Emran</footer>
             
            </blockquote>
          </div>
          <div>
            <img src={about} className="p-2 " alt={about} />
          </div>
        </div>
      </div>
      <h1 className='text-center text-5xl my-7'>Profession Skill</h1>
      <Skills></Skills>
      <h1 className='text-center text-5xl my-7'>Experience</h1>
      <div className="hero  bg-base-200">
        <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1">

          <div>
            <h1 className="text-5xl font-bold">What <span className='textPrimary'>I</span>  know!</h1>
            <p className='mt-6 mb-4'>Additionally, I am skilled in <span className='textSecondary'>planning, designing, developing, implementing, and debugging</span>  web application development and also <span className='textSecondary'>data analysis</span> .</p>
            <p>Also, I am good at object-oriented programming, Core javaScript, Front-end development frameworks <span className='textSecondary'>React & NoSQL, and Visual Studio.</span>  As of now, I am a professional web developer with various knowledge. </p>

          <p> Currently, I have completed lots of projects which helped me to become a full-stack developer. I have completed the certification <span className='textSecondary'>exam in the programming hero full-stack developer course.</span></p>

              <p>
              I have completed my thesis based on Machine learning. The research paper named is:<span className='textSecondary'>customer behavioral segmentation using machine learning approach.</span> C I am joining some hackathon.
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
      <h1 className='text-center text-5xl my-7'>Tools I Use!</h1>
      <Tools></Tools>
      <h1 className='text-center text-5xl my-7'>Github Contribution!</h1>
      <div className='flex justify-center '>
        <GitHubContribution></GitHubContribution>
      </div>

    </div>
  );
};

export default About;