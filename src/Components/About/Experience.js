import React from 'react';
import { ImPointRight } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { FcPhone } from "react-icons/fc";
import { FaMapMarked } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

import Skills from './Skills';
import background from '../../Assets/footer.png'
import SwiperCertificate from '../Swiper.js/SwiperCertificate';
const Experience = () => {
    return (
        <div>
            <div style={{
        background: `url(${background})`,
        backgroundSize: 'cover',
        zIndex: '-1'
      }} className='hero '>
        <div className="lg:ml-28 grid lg:grid-cols-3 sm:grid-cols-1  lg:gap-8 p-6" >
          <div className='lg:col-span-2'>
            <h1 className='text-4xl'>
              Know Who <strong className="textPrimary">I'M</strong>
            </h1>
            <blockquote className="blockquote mb-0 text-xl">
              <p style={{ textAlign: "justify" }} >
                Software engineering graduate with a solid background in web application development.I am a full-stack web developer who can convert a UI design to a responsive website template using ReactJS and bring it to life with dynamic functionality. I am skilled in developing scalable REST APIs using Node.js, ExpressJS, and MongoDB and connecting them with front-end single-page applications. I am also proficient in the Express.Js framework and have a strong understanding of both client and server-side rendering.<span className="textPrimary">Specialized in MERN stack web development</span> .I am also good at data science and machine learning.I can make decision from your data and make valuable insight of it. I am confident that I can help your business grow faster by providing high-quality services and staying ahead of the curve in the ever-evolving tech landscape.I am always looking for new opportunities to learn and grow as a Web Developer professional, and I am excited to bring my skills and experience to new challenges. I am a team player who is able to work well with others and contribute to the success of projects. I am open to working as a full-time, part-time <span className="textPrimary">web developer or data analyst position.</span>
                Apart from programming, some other activities that I love to do!
              </p>
              <ul className='my-4'>
                <li className="flex text-xl">
                  <ImPointRight /> <span className='ml-2'>Playing Cricket</span>
                </li>
                <li className="flex text-xl">
                  <ImPointRight /> <span className='ml-2'>Bike riding with friend</span>
                </li>
                <li className="flex text-xl">
                  <ImPointRight /> <span className='ml-2'>Explore new technology</span>
                </li>
              </ul>
            </blockquote>
          </div>
          <div>
            <h1 className='text-4xl mb-2'>Basic <strong className="textPrimary"> Information</strong> </h1>
            <li className="flex items-center my-2">
              <span className='text-2xl'><SiGmail /></span> <h1 className='ml-5'>mdemran.swe@gmail.com</h1>
            </li>
            <li className="flex items-center my-2">
              <span className='text-2xl'> <BsLinkedin /></span> <h1 className='ml-5'>https://www.linkedin.com/in/emran2k18/</h1>
            </li>
            <li className="flex items-center my-2">
              <span className='text-2xl'> <FcPhone /></span> <h1 className='ml-5'>+8801838235450</h1>
            </li>
            <li className="flex items-center my-2">
              <span className='text-2xl'><FaMapMarked /> </span> <h1 className='ml-5'>Bosila,Mohammadpur,Dhaka</h1>
            </li>
            <li className="flex items-center my-2">
              <span className='text-2xl'><FaLanguage /> </span> <h1 className='ml-5'>Bangla,English</h1>
            </li>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <h1 className='text-center text-4xl my-7'>Technical <strong className='textPrimary'>Skills</strong> </h1>
      <Skills></Skills>

      <h1 className='text-center text-4xl my-7'>Experience</h1>

      <SwiperCertificate></SwiperCertificate> 
        </div>
    );
};

export default Experience;