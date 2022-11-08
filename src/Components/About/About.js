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
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
                Hi Everyone, I am <span className="textPrimary">MD EMRAN </span>
                from <span className="textPrimary"> Dhaka,Bangladesh.</span>
                <br />I have completed my graduation from Daffodil International University
                <br />
                <br />
                Apart from coding, some other activities that I love to do!
              </p>
              <ul>
                <li className="flex">
                  <ImPointRight /> Playing Games
                </li>
                <li className="flex">
                  <ImPointRight /> Writting Tech Blogs
                </li>
                <li className="flex">
                  <ImPointRight /> Travelling
                </li>
              </ul>

              <p style={{ color: "rgb(155 126 172)" }}>
                "Strive to build things that make a difference!"{" "}
              </p>
            </blockquote>
          </div>
          <div>
            <img src={about} className="p-2 " />
          </div>
        </div>
      </div>
      <h1 className='text-center text-5xl my-7'>Profession Skill</h1>
      <Skills></Skills>
      <h1 className='text-center text-5xl my-7'>Experience</h1>
      <div class="hero  bg-base-200">
        <div class="hero-content grid lg:grid-cols-2 sm:grid-cols-1">

          <div>
            <h1 class="text-5xl font-bold">Here are some of skill</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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