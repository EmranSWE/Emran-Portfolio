import React from 'react';
import about from '../../Assets/about.png';
import { ImPointRight } from "react-icons/im";
import Skills from './Skills';
import Tools from './Tools';
import GitHubContribution from './GitHubContribution';

const About = () => {
    return (
        <div>
            <div class="grid lg:grid-cols-3 sm:grid-cols-1 " >
            <div className='p-40 lg:col-span-2'>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />I am a junior pursuing IMSC in Maths and Computing in BIT
            Mesra.
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
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
               
            </div>

            <div>
                <img src={about} className="p-2  " />
            </div>
        </div>
        <h1 className='text-center text-5xl my-7'>Profession Skill</h1>
        <Skills></Skills>
        <h1 className='text-center text-5xl my-7'>Tools I Use!</h1>
            <Tools></Tools>
        <h1 className='text-center text-5xl my-7'>Github Contribution!</h1>
        <div className='w-100 ml-20'>
        <GitHubContribution></GitHubContribution>
        </div>

        </div>
    );
};

export default About;